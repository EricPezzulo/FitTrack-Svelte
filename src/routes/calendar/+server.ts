import { connectToDb } from '$lib/mongoConnect.js';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function GET({ request }) {
	const userId = request.headers.get('User-Id');
	if (userId) {
		const currentYear = new Date().getFullYear().toString();
		const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
		const currentMonthRange = `^${currentYear}\\/${currentMonth}\\/\\d{2}$`;
		const db = await connectToDb();
		const collection = db.collection('calendarEvents');
		const id = new ObjectId(userId);
		const res = await collection
			.find({ date: { $regex: currentMonthRange }, userId: id })
			.toArray();
		return json(res);
	}
}
