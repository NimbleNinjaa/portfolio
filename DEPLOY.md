# Deploying to hamidrezayourdkhani.com (Oracle Cloud + Cloudflare)

I don't have access to your Oracle server, so this is a runbook for you to
follow — copy/paste commands where noted. It assumes a fresh Ubuntu VM on
Oracle Cloud Infrastructure (OCI) and DNS managed in Cloudflare.

## 1. Point DNS at your server (Cloudflare)

In the Cloudflare dashboard for `hamidrezayourdkhani.com`, add:

| Type | Name | Content              | Proxy status                  |
| ---- | ---- | --------------------- | ------------------------------ |
| A    | @    | `<your Oracle VM public IP>` | **DNS only** (grey cloud) |
| A    | www  | `<your Oracle VM public IP>` | **DNS only** (grey cloud) |

Keep proxy status **DNS only** for now — Caddy needs to talk directly to
Let's Encrypt to issue your certificate on first boot. You can switch to
"Proxied" (orange cloud) afterward once the site is up over HTTPS, if you
want Cloudflare's CDN/DDoS protection in front of it — just know that then
Cloudflare's own SSL mode should be set to **Full (strict)** so it trusts
Caddy's real certificate instead of accepting anything.

## 2. Oracle Cloud firewall — two layers, both need opening

This is the single most common trip-up on OCI: traffic is blocked by *two*
independent firewalls, and both have to allow it.

**a) Security List / Network Security Group** (in the OCI console):
Add ingress rules for your VM's subnet:
- TCP port 80 (0.0.0.0/0)
- TCP port 443 (0.0.0.0/0)

**b) The VM's own OS firewall** (iptables, active by default on Oracle's
stock images even after step a). SSH into the VM and run:

```bash
sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save   # or: sudo iptables-save > /etc/iptables/rules.v4
```

(If the VM uses `firewalld` instead: `sudo firewall-cmd --permanent --add-port=80/tcp --add-port=443/tcp && sudo firewall-cmd --reload`.)

## 3. Install Docker on the VM

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker
```

## 4. Get the code onto the server

Pick one:

**Option A — via GitHub (recommended, matches the CI/CD already set up):**
Push this repo to a GitHub repo first (from your own machine — I only did
`git init` + a local commit, no remote is configured), then on the server:

```bash
git clone https://github.com/<you>/<repo>.git
cd <repo>
```

**Option B — copy directly, no GitHub needed:**

```bash
# from your local machine
rsync -avz --exclude node_modules --exclude .git --exclude build \
  d:/hamidportfolio/sveltekit-app/ user@<server-ip>:~/portfolio/
```

## 5. Set the production secret

On the server, in the project directory:

```bash
echo "RESEND_API_KEY=re_your_real_key" > .env
```

(Same key from your local `.env` — don't commit either of them, both are
gitignored already.)

## 6. Launch

```bash
docker compose up -d --build
```

This starts two containers: `portfolio` (the SvelteKit app, not exposed
directly to the internet) and `caddy` (reverse proxy on 80/443, terminates
HTTPS, auto-issues and renews the Let's Encrypt cert for the domain in
`Caddyfile`).

Check it's healthy:

```bash
docker compose ps
docker compose logs -f caddy   # watch for "certificate obtained successfully"
```

Once that log line appears, `https://hamidrezayourdkhani.com` should be
live with a valid certificate.

## 7. Redeploying after changes

```bash
git pull            # or re-run the rsync from step 4
docker compose up -d --build
```

## Notes

- `docker-compose.yml` now only exposes ports 80/443 (via Caddy) — the app
  container itself (`portfolio`) is not reachable from outside the Docker
  network directly, only through the proxy.
- If you later want auto-deploy on every push (using the
  `docker-publish.yml` GitHub Action that already builds and pushes to
  `ghcr.io`), the commented-out SSH deploy step in that workflow is the
  starting point — it needs `DEPLOY_HOST` / `DEPLOY_USER` / `DEPLOY_SSH_KEY`
  secrets added in the GitHub repo settings.
