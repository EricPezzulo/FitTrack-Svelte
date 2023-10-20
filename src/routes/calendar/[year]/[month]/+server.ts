// import { connectToDb } from '$lib/mongoConnect';

import { connectToDb } from '$lib/mongoConnect.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	let { month } = params;
	const { year } = params;

	if (Number(month) < 10) {
		month = 0 + month;
	}

	const db = await connectToDb();
	const collection = db.collection('calendarEvents');

	const currentMonthRange = `^${year}\\/${month}\\/\\d{2}$`;

	const res = await collection.find({ date: { $regex: currentMonthRange } }).toArray();
	console.log(res);
	return json(res);
}
