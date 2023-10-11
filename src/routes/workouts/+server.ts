import { json } from '@sveltejs/kit';

export async function GET() {
	const my_string: string = 'this is my test string';
	return json(my_string);
}
