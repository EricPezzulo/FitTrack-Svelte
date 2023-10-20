import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { AUTH_SECRET, GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { clientPromise, connectToDb } from '$lib/mongoConnect';

interface ExtendUser {
	name?: string | null;
	email?: string | null;
	image?: string | null;
	userId?: string;
}

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
	}),
	// add mongo user ObjectId to session obj
	callbacks: {
		async session({ session }) {
			const userSession: ExtendUser | undefined = session.user;

			if (!userSession || userSession.userId) {
				// If there's no user or userId is already set, return session as-is
				return session;
			}

			const userIdentifier = userSession.email; // Adjust to whatever unique field you have

			// Connect to MongoDB and fetch the user's full object
			const db = await connectToDb();
			const userCollection = db.collection('users');
			const user = await userCollection.findOne({ email: userIdentifier });

			// Extract the _id from the fetched user object and add it to the session
			if (user && user._id) {
				return {
					...session,
					user: {
						...session.user,
						userId: user._id.toString()
					}
				};
			}
			return session;
		}
	}
});
