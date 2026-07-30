# Hamid's Personal Portfolio

A personal portfolio site built with SvelteKit 5, TypeScript, and Tailwind CSS.

## Stack

- [SvelteKit](https://kit.svelte.dev/) + Svelte 5 (runes)
- TypeScript
- Tailwind CSS
- [Resend](https://resend.com) for the contact form
- Docker (`@sveltejs/adapter-node`) for deployment

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable          | Description                                                        |
| ----------------- | -------------------------------------------------------------------- |
| `RESEND_API_KEY`  | API key from [resend.com](https://resend.com/api-keys), used by the contact form action in `src/routes/+page.server.ts` |

Without this variable set, the contact form will show a friendly error instead of sending.

## Scripts

```bash
npm run dev        # start dev server
npm run build       # production build (outputs to build/)
npm run preview     # preview the production build locally
npm run check        # type-check with svelte-check
```

## Project structure

```
src/
├── lib/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── ui/         # Preloader, ScrollToTop
│   │   └── sections/   # Hero, Projects, About, Contact, etc.
│   └── stores/
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   └── +page.server.ts  # contact form action
static/
└── assets/              # images, fonts, vendor css/js
```

## Deployment

### Docker

```bash
docker build -t hamid-portfolio .
docker run -p 3000:3000 -e RESEND_API_KEY=your_key hamid-portfolio
```

Or with Docker Compose (reads `RESEND_API_KEY` from your shell/`.env`):

```bash
docker compose up -d --build
```

### CI/CD

- `.github/workflows/ci.yml` — type-checks and builds on every push/PR to `main`.
- `.github/workflows/docker-publish.yml` — builds and pushes the Docker image to GitHub Container Registry (`ghcr.io`) on pushes to `main` and version tags. Deploying that image to your own server (SSH, docker compose, etc.) is left as a commented-out template in that workflow since it depends on your host.
