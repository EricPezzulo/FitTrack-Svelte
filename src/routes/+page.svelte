<svelte:head>
	<title>FitTrack :D</title>
</svelte:head>

<main>
	<div class="page-wrapper">
		<p>welcome to fittrack</p>
		<a class="btn-wrapper" href="/createworkout">
			<button class="btn" type="button">Create a workout</button>
		</a>
	</div>
</main>

<style>
	main {
		display: grid;
		place-items: center;
	}
	.page-wrapper {
		display: grid;
		place-items: center;
		width: 100%;
		max-width: 1024px;
	}
	.btn {
		cursor: pointer;
		border-radius: 9999px;
		background-color: #0496ff;
		color: white;
		padding-inline: 20px;
		padding-block: 10px;
		border: none;
		outline: none;
		align-items: center;
		font-weight: 600;
	}
	.btn-wrapper {
		padding-block: 10px;
	}
</style>
