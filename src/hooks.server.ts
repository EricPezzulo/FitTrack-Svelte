import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { AUTH_SECRET, GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
	secret: AUTH_SECRET,
	// enable this when if not deploying on vercel
	trustHost: true
});
