export async function load({ fetch }) {
	const res = await fetch('/workouts');
	const data = await res.json();
	return {
		data
	};
}
