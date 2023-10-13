import { connectToDb } from '$lib/mongoConnect.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	const db = await connectToDb();
	const collection = db.collection('workouts');
	const res = await collection.find({}).toArray();
	return json(res);
}

export async function POST({ request }) {
	const { newWorkout } = await request.json();
	const db = await connectToDb();
	const collection = db.collection('workouts');
	const result = await collection.insertOne(newWorkout);
	// console.log(newWorkout);
	return json(result);
}
