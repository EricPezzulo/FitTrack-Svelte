// import { connectToDb } from '$lib/mongoConnect.js';
import { connectToDb } from '$lib/mongoConnect.js';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function GET({ params }) {
	const db = await connectToDb();
	const collection = db.collection('workouts');
	const result = await collection.findOne({ _id: new ObjectId(params.id) });
	return json(result);
}

export async function DELETE({ params }) {
	const { id } = params;
	const db = await connectToDb();
	const collection = db.collection('workouts');
	const res = await collection.deleteOne({ _id: new ObjectId(id) });
	return json(res);
}

export async function PUT({ request, params }) {
	console.log(request.body);
	const { id } = params;
	const { body } = request;
	const db = await connectToDb();
	const collection = db.collection('workouts');
	const res = await collection.updateOne(
		{ _id: new ObjectId(id) },
		{
			$set: body
		}
	);
	return json(res);
}
