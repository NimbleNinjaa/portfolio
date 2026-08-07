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
        <img loading="lazy" width="1440" height="1081" src="/assets/images/item/bg-3.png" alt="">
    </div>
    <div class="s-header d-block">
        <div class="container">
            <h2 class="text-display-2 letter-space--3 text-center effectFade fadeUp">
                Got an idea? <br>
                Let's break things (in a good way)
            </h2>
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
                                    <input class="tf-input" type="text" id="contact-name" name="name" value={form?.values?.name ?? ''} placeholder=" " required>
                                    <label class="tf-lable" for="contact-name">Name <span class="text-primary">*</span></label>
                                </fieldset>
                                <fieldset class="tf-field">
                                    <input class="tf-input" type="email" id="contact-email" name="email" value={form?.values?.email ?? ''} placeholder=" " required>
                                    <label class="tf-lable" for="contact-email">Email <span class="text-primary">*</span></label>
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
                                <textarea class="tf-input" id="contact-message" name="message" rows="3" placeholder=" " required>{form?.values?.message ?? ''}</textarea>
                                <label class="tf-lable" for="contact-message">What's on your mind?</label>
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
