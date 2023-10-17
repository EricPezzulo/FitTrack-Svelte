import { connectToDb } from '$lib/mongoConnect.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	// console.log(params);
	const db = await connectToDb();
	const collection = db.collection('calendarEvents');
	const res = await collection.find({}).toArray();

	return json(res);
}
