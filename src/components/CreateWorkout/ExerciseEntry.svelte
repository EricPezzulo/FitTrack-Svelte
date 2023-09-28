<script lang="ts">
	import type { ExercisesType } from '$lib/typings';
	import Icon from '@iconify/svelte';
	export let index: number,
		id: string,
		exercises: ExercisesType,
		exerciseComplete: boolean,
		instructions: string = '',
		exerciseName: string = '';

	function completeExercise(): void {
		console.log(`${exerciseName} completed`);
		exerciseComplete = !exerciseComplete;
	}

	function remove(id: string): void {
		let updatedList = exercises.filter((exercise) => exercise.id !== id);
		exercises = updatedList;
	}
</script>

<div class="workout-card-top">
	<div class="exercise-number-box">
		<p class="exercise-number">{exercises.length - index}</p>
	</div>

	<div class="exercise-name-padding">
		<input class="exercise-name" bind:value={exerciseName} />
	</div>
	<div class="remove-icon-container">
		<div class="remove-icon">
			<button type="button" on:click={() => remove(id)} data-icon="tabler:trash" class="iconify">
				<Icon height="20px" icon="tabler:trash" />
			</button>
		</div>
	</div>
</div>

<textarea class="instructions" bind:value={instructions} />

<style>
	.workout-card-top {
		display: grid;
		grid-template-columns: auto auto 1fr;
		justify-content: space-between;
		align-items: center;
		place-items: center;

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
		height: 28px;
		align-items: center;
		padding-left: 10px;
		font-family: 'Sofia', sans-serif;
		text-align: left;
		border: none;
		transition-duration: 350ms;
		animation: ease-in-out;
		border-radius: 5px;
	}
	.exercise-name:active,
	.exercise-name:focus,
	.exercise-name:hover {
		outline: none;
		background: #f0f0f0;
	}
	.exercise-name-padding {
		padding-left: 5px;
	}

	.iconify:hover :global(.iconify) {
		color: rgb(255, 97, 97);
	}

	.remove-icon {
		/* padding: 5px; */
		border-radius: 5px;
		transition-duration: 200ms;
		animation: ease-in-out;
	}
	.remove-icon:hover {
		background-color: rgb(239, 241, 247);
	}
	.remove-icon-container {
		width: 100%;
		place-content: end;
		display: grid;
	}
	.iconify {
		padding: 5px;
		border-radius: 5px;
		transition-duration: 200ms;
		animation: ease-in-out;
		background-color: transparent;
		border: none;
		display: grid;

		place-content: end;
	}

	.iconify :global(.iconify) {
		transition-duration: 200ms;
		animation: ease-in-out;
		color: #a0a0a0;
	}

	.instructions {
		background: #ffffff;
		border-radius: 5px;
		border: none;
		resize: none;
		outline: 1px solid rgba(172, 172, 172, 0.25);
		padding: 15px;
		height: 150px;
		overflow: auto;
		scroll-behavior: smooth;
		white-space: pre-line;
		transition-duration: 250ms;
		animation: ease-in-out;
	}
	.instructions:hover {
		outline: 1px solid rgba(156, 156, 156, 0.6);
		cursor: text;
	}
	.instructions:active,
	.instructions:focus {
		outline: 1px solid rgba(129, 129, 129, 0.9);
	}
</style>
