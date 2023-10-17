export async function load({ fetch }) {
	const res = await fetch('/calendar', {
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
