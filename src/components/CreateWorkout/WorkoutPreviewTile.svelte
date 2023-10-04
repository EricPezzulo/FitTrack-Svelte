<script lang="ts">
	import type { DataProps, Exercise, ExercisesType, WorkoutType } from '$lib/typings';
	export let title: string, entry: WorkoutType;
	// console.log(entry);
</script>

<li class="upcoming-workout-card">
	<div class="workout-card-preview">
		<div class="title-date">
			<p class="workout-card-title">{title}</p>
			<p class="date">09/17</p>
		</div>

		<ul class="exercise-list-items">
			<!-- <li>{entry.exercises[0].exerciseName}</li> -->
			{#each entry.exercises as exercise, index}
				<li>{exercise.exerciseName}</li>
				<li>{exercise.instructions}</li>
			{/each}
			<!-- <li>{entry.exerciseName}</li> -->
		</ul>
	</div>
</li>

<style>
	.title-date {
		display: grid;
		grid-template-columns: 1fr auto;
	}
	.date {
		width: 100%;
		font-size: 14px;
		color: #969ca8;
	}
	.exercise-list-items {
		font-size: 14px;
		padding-top: 10px;
		text-align: left;
		color: #353638;
		list-style-type: none;
	}
	.workout-card-title {
		font-size: 18px;
		font-weight: 600;
		font-family: 'Sofia', sans-serif;
	}
	.workout-card-preview {
		width: 100%;
		padding: 20px;
	}
	.upcoming-workout-card {
		display: grid;
		place-items: center;
		background-color: white;
		border-radius: 3px;
		border: 1px solid #dbe2f0;
		overflow-y: auto;
		width: 200px;
		height: 175px;
		transition-duration: 250ms;
		animation: ease-in-out;
	}
	.upcoming-workout-card:hover {
		background-color: rgb(246, 246, 250);
		cursor: pointer;
	}
	.upcoming-workout-card::-webkit-scrollbar {
		display: none;
	}
</style>
