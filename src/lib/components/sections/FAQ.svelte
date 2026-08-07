<script lang="ts">
	interface FaqItem {
		question: string;
		answer: string;
	}

	const faqs: FaqItem[] = [
		{
			question: 'How long does a project usually take?',
			answer:
				"Most projects are completed within 4–8 weeks, depending on complexity, revisions, and scope. I'll always provide a clear timeline before starting."
		},
		{
			question: 'Do you work with international clients?',
			answer:
				'Yes, I collaborate with clients worldwide using online meetings, project management tools, and shared design platforms to ensure smooth communication.'
		},
		{
			question: 'Can you help with both design and development?',
			answer:
				'Absolutely. I handle branding, UI/UX design, and no-code or coded development to deliver a complete end-to-end solution.'
		},
		{
			question: "What's your payment process?",
			answer:
				'I typically require a 50% deposit to begin work, with the remaining balance due upon project completion and approval.'
		},
		{
			question: 'Do you provide ongoing support after launch?',
			answer:
				'Yes. I offer maintenance, updates, and performance monitoring packages to keep your website or product running smoothly long-term.'
		}
	];

	let openIndex = $state(-1);

	function toggle(index: number) {
		openIndex = openIndex === index ? -1 : index;
	}
</script>

<!-- Faq -->
<section class="section-faq flat-spacing" id="faqScroll">
    <div class="container">
        <div class="s-header d-block">
            <h2 class="text-display-2 letter-space--3 text-center effectFade fadeUp">
                Frequently <br>
                asked questions
            </h2>
        </div>
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="accordion-faq_list">
                    {#each faqs as faq, index}
                        <div class="accordion-faq_item" role="presentation">
                            <div
                                class="accordion-action text-body-1 letter-space--1 fw-medium"
                                class:collapsed={openIndex !== index}
                                role="button"
                                tabindex="0"
                                aria-controls="faq-{index}"
                                aria-expanded={openIndex === index}
                                onclick={() => toggle(index)}
                                onkeydown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        toggle(index);
                                    }
                                }}
                            >
                                <span class="accordion-order">{String(index + 1).padStart(2, '0')}</span>
                                <p class="accordion-text">{faq.question}</p>
                                <div class="ic-wrap d-flex">
                                    <i class="icon icon-arrow-caret-down fs-10"></i>
                                </div>
                            </div>
                            <div id="faq-{index}" class="accordion-panel" class:open={openIndex === index}>
                                <div class="accordion-panel-inner">
                                    <p class="accordion-content">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Faq -->

<style>
    .accordion-panel {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s ease;
    }
    .accordion-panel.open {
        grid-template-rows: 1fr;
    }
    .accordion-panel-inner {
        overflow: hidden;
    }
</style>
