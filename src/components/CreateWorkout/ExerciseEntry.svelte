<script lang="ts">
	import type { Exercise } from '$lib/typings';
	import Icon from '@iconify/svelte';
	export let index: number;
	export let exercise: Exercise;
	export let edit: boolean;
	export let exerciseComplete: boolean;

	$: completeButtonText = exerciseComplete ? 'Completed' : 'Done';
	function completeExercise(): void {
		console.log(`${exercise.exerciseName} completed`);
		exerciseComplete = !exerciseComplete;
		// let removeFromTodos = exercises.filter((elem) => elem.id !== exercise.id);
		// exercises = removeFromTodos;
		// completed = [...completed, exercise];
	}
	function toggleEdit() {
		edit = !edit;
	}
</script>

<div class="workout-card-top">
	<div class="exercise-number-box">
		<p class="exercise-number">{index + 1}</p>
	</div>
	<p class="exercise-name">{exercise.exerciseName}</p>
	<button class="edit-btn" on:click={toggleEdit}>
		<Icon height="25px" icon="tabler:edit" />
	</button>
</div>
<p class="instructions">{exercise.instructions}</p>

<!-- <div class="btn-container">
	<button class="complete-btn" class:exerciseComplete on:click={completeExercise}
		>{completeButtonText}</button
	>
</div> -->

<style>
	.workout-card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding-bottom: 20px;
	}
	.exercise-number-box {
		background-color: #0496ff;
		display: grid;
		place-items: center;
		border-radius: 2px;
		color: white;
		font-family: 'Sofia', sans-serif;
		font-weight: 600;
		font-size: 20px;
		width: 25px;
		height: 25px;
	}
	.exercise-name {
		display: flex;
		flex: 1;
		font-size: 18px;
		font-weight: 600;
		/* padding-block: 5px; */
		height: 25px;
		align-items: center;
		padding-left: 15px;
		font-family: 'Sofia', sans-serif;
		text-align: left;
		/* background-color: red; */
	}
	.edit-btn {
		background-color: transparent;
		border: none;
	}
	.edit-btn:hover {
		cursor: pointer;
	}

	.instructions {
		background: #ffffff;
		border-radius: 5px;
		outline: 1px solid rgba(172, 172, 172, 0.25);
		padding: 15px;
		height: 150px;
		overflow: auto;
		scroll-behavior: smooth;
		white-space: pre-line;
	}
	.btn-container {
		display: grid;
		place-items: center;
		padding-top: 25px;
	}
	::-webkit-scrollbar {
		display: none;
	}
	.complete-btn {
		background-color: #027bce;
		color: white;
		width: 90%;
		border-radius: 9999px;
		border: none;
		height: 30px;
		transition-duration: 250ms;
		animation: ease-in-out;
		font-weight: 600;
	}
	.complete-btn.exerciseComplete {
		background-color: rgb(199, 199, 199);
		color: rgb(71, 71, 71);
		font-weight: 600;
	}
	.complete-btn:hover {
		cursor: pointer;
		background-color: #2a8fd3;
	}
</style>
