export async function load({ fetch, params }) {
	const { id } = params;
	const res = await fetch(`/workouts/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await res.json();
	return {
		data
	};
}
