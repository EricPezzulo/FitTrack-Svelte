import type { LayoutServerLoad } from './$types';
import { connectToDb1 } from '$lib/mongoConnect';

export const load: LayoutServerLoad = async (event) => {
	connectToDb1().catch(console.dir);
	return {
		session: await event.locals.getSession()
	};
};
