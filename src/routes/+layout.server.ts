import type { LayoutServerLoad } from './$types';
import { connectToDb } from '$lib/mongoConnect';

export const load: LayoutServerLoad = async (event) => {
	connectToDb().catch(console.dir);
	return {
		session: await event.locals.getSession()
	};
};
