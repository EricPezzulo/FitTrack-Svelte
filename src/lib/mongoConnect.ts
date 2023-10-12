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
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		// Send a ping to confirm a successful connection
		await client.db('admin').command({ ping: 1 });
		console.log('🤖 - Pinged your deployment. You successfully connected to MongoDB!');
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}

export async function connectToDb1() {
	if (cachedDb) {
		return cachedDb;
	}
	const client = await MongoClient.connect(MONGODB_URI);
	console.log('connected to mongo');
	const db = client.db('fittrack');
	cachedDb = db;
	return db;
}
