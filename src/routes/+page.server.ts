import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

const CONTACT_EMAIL = 'hamidreza.yourdkhani1993@gmail.com';

export const actions: Actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		const name = (data.get('name') ?? '').toString().trim();
		const email = (data.get('email') ?? '').toString().trim();
		const interest = (data.get('interest') ?? '').toString().trim();
		const budget = (data.get('budget') ?? '').toString().trim();
		const message = (data.get('message') ?? '').toString().trim();

		if (!name || !email || !message) {
			return fail(400, {
				error: "Whoops, looks like you forgot something. Name, email, and a message are the bare minimum — I'm good, not psychic.",
				values: { name, email, interest, budget, message }
			});
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, {
				error: "That email address doesn't look real — double-check it so I can actually write back.",
				values: { name, email, interest, budget, message }
			});
		}

		if (!env.RESEND_API_KEY) {
			console.error('RESEND_API_KEY is not set — contact form cannot send email.');
			return fail(500, {
				error: 'Something broke on my end (not you, I promise). Try again in a bit or email me directly.',
				values: { name, email, interest, budget, message }
			});
		}

		const resend = new Resend(env.RESEND_API_KEY);

		try {
			const { error } = await resend.emails.send({
				from: 'Portfolio Contact Form <onboarding@resend.dev>',
				to: CONTACT_EMAIL,
				replyTo: email,
				subject: `New message from ${name}${interest ? ` — ${interest}` : ''}`,
				text: [
					`Name: ${name}`,
					`Email: ${email}`,
					interest ? `Interested in: ${interest}` : null,
					budget ? `Budget: ${budget}` : null,
					'',
					message
				]
					.filter(Boolean)
					.join('\n')
			});

			if (error) {
				console.error('Resend error:', error);
				return fail(500, {
					error: 'The message tried to send and tripped over a cable. Mind trying again?',
					values: { name, email, interest, budget, message }
				});
			}
		} catch (err) {
			console.error('Contact form send failed:', err);
			return fail(500, {
				error: 'The message tried to send and tripped over a cable. Mind trying again?',
				values: { name, email, interest, budget, message }
			});
		}

		return { success: true };
	}
};
