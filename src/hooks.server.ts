import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { AUTH_SECRET, GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { clientPromise } from '$lib/mongoConnect';

export const handle = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
	secret: AUTH_SECRET,
	// enable this when if not deploying on vercel
	trustHost: true,
	adapter: MongoDBAdapter(clientPromise, {
		databaseName: 'fittrack',
		collections: {
			Users: 'users'
		}
	})
});
