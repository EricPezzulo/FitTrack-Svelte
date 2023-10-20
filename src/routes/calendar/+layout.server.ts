export async function load({ fetch, cookies }) {
	const userId = cookies.get('userId');
	const headers: Record<string, string> = {
		'Content-Type': 'application/json'
	};
	if (userId) {
		headers['User-Id'] = userId;
	}
	try {
		const res = await fetch('/calendar', {
			method: 'GET',
			headers: headers
		});
		const data = await res.json();

		return {
			data
		};
	} catch (error) {
		console.log(error, 'req failed');
	}
}
