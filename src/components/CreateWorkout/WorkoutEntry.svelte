<script lang="ts">
	import type { Exercise, ExercisesType } from '$lib/typings';
	import ExerciseEntry from './ExerciseEntry.svelte';
	export let exercises: ExercisesType;
	export let exercise: Exercise;
	export let index: number;

	let exerciseComplete = false;
</script>

<li class="entry-wrapper">
	<div class="item">
		<ExerciseEntry
			bind:instructions={exercise.instructions}
			bind:exerciseName={exercise.exerciseName}
			bind:exercises
			bind:id={exercise.id}
			{index}
			bind:exerciseComplete
		/>
	</div>
</li>

<style>
	.entry-wrapper {
		padding-block: 8px;
		/* width: 100%; */
	}
	.item {
		padding: 25px;
		background-color: #ffffff;
		/* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15); */
		border: 1px solid rgb(230, 230, 230);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		height: auto;
	}
	@media screen and (max-width: 600px) {
		.entry-wrapper {
			width: 90%;
		}
	}
	@media screen and (min-width: 600px) {
		.entry-wrapper {
			width: 75%;
		}
	}
	@media screen and (min-width: 1024px) {
		.entry-wrapper {
			width: 700px;
		}
	}
</style>
