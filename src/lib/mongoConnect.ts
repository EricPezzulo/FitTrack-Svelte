import { MONGODB_URI } from '$env/static/private';
import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedDb: Db | null = null;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

export async function connectToDb() {
	if (cachedDb) {
		return cachedDb;
	}
	// const client = await MongoClient.connect(MONGODB_URI);
	const db = client.db('fittrack');
	await client.connect();
	cachedDb = db;
	console.log('🤖 Connected to MongoDB');

	return db;
}
