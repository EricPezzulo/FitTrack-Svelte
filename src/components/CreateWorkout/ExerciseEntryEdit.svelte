<script lang="ts">
	import type { Exercise } from '$lib/typings';
	import Icon from '@iconify/svelte';
	export let index: number;
	export let exercise: Exercise;
	export let exercises: Exercise[];
	export let edit: boolean;
	export let exerciseComplete: boolean;

	function remove(id: string): void {
		let updatedList = exercises.filter((exercise) => exercise.id !== id);
		exercises = updatedList;
	}

	function completeExercise(): void {
		console.log(`${exercise.exerciseName} completed`);
		exerciseComplete = !exerciseComplete;
		// let removeFromTodos = exercises.filter((elem) => elem.id !== exercise.id);
		// exercises = removeFromTodos;
		// completed = [...completed, exercise];
	}
	$: completeButtonText = exerciseComplete ? 'Completed' : 'Done';
</script>

<div class="workout-card-top">
	<div class="exercise-number-box">
		<p class="exercise-number">{index + 1}</p>
	</div>
	<div class="exercise-name-input-wrapper">
		<input type="text" class="exercise-name-input" bind:value={exercise.exerciseName} />
	</div>

	<button class="remove-btn" on:click={() => remove(exercise.id)}>
		<Icon height="25px" icon="tabler:trash-x" />
	</button>
	<button class="edit-btn" on:click={() => (edit = !edit)}>
		<Icon height="25px" icon="tabler:checkbox" />
	</button>
</div>
<textarea bind:value={exercise.instructions} class="instructions-editable" />

<!-- {#if !edit}
	<div class="btn-container">
		<button class="complete-btn" class:exerciseComplete on:click={completeExercise}
			>{completeButtonText}</button
		>
	</div>
{/if} -->

<style>
	.remove-btn {
		color: #ff5c6a;
		border: none;
		background-color: transparent;
		transition-duration: 200ms;
		animation: ease-in-out;
		padding-right: 10px;
	}
	.remove-btn:hover {
		cursor: pointer;
		color: #db414e;
	}
	.exercise-name-input:active,
	.exercise-name-input:focus {
		outline: none;
	}
	.exercise-name-input-wrapper {
		padding-inline: 15px;
		display: flex;
		flex: 1;
	}
	.exercise-name-input {
		border-radius: 5px;
		background-color: rgb(245, 245, 245);
		margin-left: -8px;
		padding-inline: 8px;
		/* padding-block: 5px; */
		border: none;
		width: 100%;
		height: 25px;
		font-size: 18px;
		font-weight: 600;
	}
	.edit-btn {
		background-color: transparent;
		border: none;
	}
	.edit-btn:hover {
		cursor: pointer;
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
	.workout-card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20px;
	}

	.instructions-editable {
		display: block;
		background: #f3f3f3;
		width: 100%;
		border: none;
		border-radius: 5px;
		padding: 15px;
		height: 150px;
		overflow: auto;
		resize: none;
		scroll-behavior: smooth;
		-webkit-transition: all 1s linear;
		-moz-transition: all 1s linear;
		-o-transition: all 1s linear;
		transition: all 1s linear;
	}
	.instructions-editable:focus,
	.instructions-editable:active {
		outline: none;
	}

	::-webkit-scrollbar {
		display: none;
	}
	.btn-container {
		display: grid;
		place-items: center;
		padding-top: 25px;
	}
</style>
