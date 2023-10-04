<script lang="ts">
	import type { DataProps, ExercisesType } from '$lib/typings';
	import WorkoutPreviewTile from './WorkoutPreviewTile.svelte';
	export let exercises: ExercisesType, data: DataProps;
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
	</style>
</svelte:head>

<div class="component-container">
	<div class="component">
		<p class="component-title">Upcoming</p>
		{#if data.length > 0}
			<div class="upcoming-list">
				<ul class="horizontal-scroll">
					{#each data as entry (entry.id)}
						<WorkoutPreviewTile title={entry.workoutName} {entry} {exercises} />
					{/each}
					<!-- {#each data as entry (entry.id)}
						<li>{entry.workoutName}</li>
						<div>
							{#each entry.exercises as exercise, index}
								<div>{exercise.exerciseName}</div>
								<div>{exercise.instructions}</div>
							{/each}
						</div>
					{/each} -->
				</ul>
			</div>
		{:else}
			<p>No upcoming workouts</p>
		{/if}
	</div>
</div>

<style>
	.component-container {
		padding-block: 10px;
	}
	.component {
		background-color: white;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
		padding: 25px;
		border-radius: 4px;
	}
	/* .upcoming-list {
		display: flex;
	} */
	.horizontal-scroll {
		list-style-type: none;
		display: flex;
		flex-direction: row;
		overflow-x: auto;
		width: 100%;
		padding-block: 20px;
		gap: 10px;
	}
	.horizontal-scroll::-webkit-scrollbar {
		height: 8px;
	}
	.horizontal-scroll::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 10px; /* Optional: if you want rounded corners */
	}
	.horizontal-scroll::-webkit-scrollbar-thumb {
		background: #c7c7c7;
		border-radius: 10px; /* Optional: if you want rounded corners */
	}
	.horizontal-scroll::-webkit-scrollbar-thumb:hover {
		background: #9b9b9b;
	}
	.component-title {
		font-size: 20px;
		font-family: 'Lato', sans-serif;
	}

	@media screen and (max-width: 600px) {
		.component-container {
			width: 90%;
		}
	}
	@media screen and (min-width: 600px) {
		.component-container {
			width: 75%;
		}
	}
	@media screen and (min-width: 1024px) {
		.component-container {
			width: 700px;
		}
	}
</style>
