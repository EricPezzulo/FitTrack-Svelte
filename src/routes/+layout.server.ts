import type { LayoutServerLoad } from './$types';
import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

export const load: LayoutServerLoad = async (event) => {
	const client = new MongoClient(MONGODB_URI);

	async function run() {
		try {
			// Connect the client to the server	(optional starting in v4.7)
			await client.connect();
			// Send a ping to confirm a successful connection
			await client.db('admin').command({ ping: 1 });
			console.log('Pinged your deployment. You successfully connected to MongoDB!');
		} finally {
			// Ensures that the client will close when you finish/error
			await client.close();
		}
	}
	run().catch(console.dir);

	return {
		session: await event.locals.getSession()
	};
};
