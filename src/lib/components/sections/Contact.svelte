<script lang="ts">
	import { enhance } from '$app/forms';

	let {
		form
	}: { form?: { success?: boolean; error?: string; values?: Record<string, string> } | null } =
		$props();

	let submitting = $state(false);
</script>

<!-- CTA -->
<section class="section-cta flat-spacing" id="contactScroll">
    <div class="bg-img">
        <img loading="lazy" width="1440" height="1081" src="/assets/images/item/bg-3.png" alt="Image">
    </div>
    <div class="s-header d-block">
        <div class="container">
            <div class="row">
                <div class="col-2 offset-lg-2 col-lg-2">
                    <div class="col-left">
                        <a href="/" class="logo-custom">
                            <div class="logo-site-sv">
                                <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.21094 0.400391C15.9908 0.392629 21.8983 0.597548 27.1426 5.65918C35.1922 13.4293 35.2468 26.7035 27.5312 34.7549C22.0053 40.1145 16.6295 40.3989 9.48535 40.4004L0.75 40.3945L0.751953 0.407227L9.21094 0.400391ZM21.5244 6.83496C16.6613 3.86011 10.4273 4.54391 4.91113 4.55664L17.2607 22.3262C19.5017 25.5466 21.7744 28.9254 24.0615 32.0889C24.847 31.468 25.7087 30.3488 26.2646 29.5088C28.7144 25.5207 29.444 20.7119 28.2871 16.1777C27.305 12.2252 25.0035 8.9637 21.5244 6.83496Z"
                                        fill="#1DB9B9" />
                                </svg>
                            </div>
                            <span class="line-vertical left"></span>
                            <span class="line-vertical right"></span>
                            <span class="line-horizontal top"></span>
                            <span class="line-horizontal bottom"></span>
                        </a>
                    </div>
                </div>
                <div class="col-10 col-lg-6">
                    <h2 class="text-display-2 letter-space--3 text-end effectFade fadeUp">
                        Got an idea? <br>
                        Let's break things (in a good way)
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                {#if form?.success}
                    <div class="form-success">
                        <h5 class="letter-space--2">Message received! 🎉</h5>
                        <p class="text-white-64">
                            Thanks for reaching out — I read every message myself (no bots, no assistants... well, except the one that helped build this form).
                            I'll get back to you as soon as I possibly can.
                        </p>
                    </div>
                {:else}
                    <form
                        method="POST"
                        action="?/contact"
                        class="form-cta"
                        use:enhance={() => {
                            submitting = true;
                            return async ({ update }) => {
                                await update();
                                submitting = false;
                            };
                        }}
                    >
                        <div class="form-content">
                            {#if form?.error}
                                <p class="form-error">{form.error}</p>
                            {/if}
                            <div class="tf-grid-layout sm-col-2">
                                <fieldset class="tf-field">
                                    <input class="tf-input" type="text" name="name" value={form?.values?.name ?? ''} placeholder=" " required>
                                    <label class="tf-lable">Name <span class="text-primary">*</span></label>
                                </fieldset>
                                <fieldset class="tf-field">
                                    <input class="tf-input" type="email" name="email" value={form?.values?.email ?? ''} placeholder=" " required>
                                    <label class="tf-lable">Email <span class="text-primary">*</span></label>
                                </fieldset>
                            </div>
                            <div class="tf-grid-layout sm-col-2">
                                <fieldset class="tf-field">
                                    <select class="tf-select" name="interest">
                                        <option value="" selected disabled>You're interested in...</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile App Development">Mobile App Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Something else">Something else entirely</option>
                                    </select>
                                </fieldset>
                                <fieldset class="tf-field">
                                    <select class="tf-select" name="budget">
                                        <option value="" selected disabled>Budget in USD</option>
                                        <option value="$0 - $1,000">$0 – $1,000</option>
                                        <option value="$1,000 - $5,000">$1,000 – $5,000</option>
                                        <option value="$5,000+">$5,000+</option>
                                        <option value="Let's talk">Let's just talk first</option>
                                    </select>
                                </fieldset>
                            </div>
                            <fieldset class="tf-field">
                                <textarea class="tf-input" name="message" rows="3" placeholder=" " required>{form?.values?.message ?? ''}</textarea>
                                <label class="tf-lable">What's on your mind?</label>
                            </fieldset>
                        </div>
                        <div class="form-action">
                            <button type="submit" class="tf-btn" disabled={submitting}>
                                <span class="text-caption">{submitting ? 'SENDING…' : 'SEND MESSAGE'}</span>
                            </button>
                            <p class="text-body-1">
                                say hello - <a href="mailto:hamidreza.yourdkhani1993@gmail.com" class="text-primary">hamidreza.yourdkhani1993@gmail.com</a>
                            </p>
                        </div>
                    </form>
                {/if}
            </div>
        </div>
    </div>
</section>
<!-- /CTA -->

<style>
    .tf-select {
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid var(--white-16);
        color: var(--white-64);
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.01em;
        padding: 0 24px 15px 0;
        cursor: pointer;
    }
    .tf-select:focus {
        outline: none;
        border-color: var(--primary);
    }
    .tf-select option {
        background-color: var(--black);
        color: var(--white);
    }
    .form-error {
        color: var(--primary);
        margin-bottom: 8px;
    }
    .form-success h5 {
        margin-bottom: 12px;
    }
</style>
