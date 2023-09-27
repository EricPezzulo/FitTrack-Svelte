<script lang="ts">
	import type { ExercisesType, WorkoutType } from '$lib/typings';
	import WorkoutNameInput from '../../components/CreateWorkout/ WorkoutNameInput.svelte';
	import CreateWorkoutEntry from '../../components/CreateWorkout/CreateWorkoutEntry.svelte';
	import WorkoutEntry from '../../components/CreateWorkout/WorkoutEntry.svelte';
	import { uuidv4 } from '../../utils/uuid';
	let exercises: ExercisesType = [];
	let completed: ExercisesType = [];
	let workoutName: string;
	let exerciseName: string;
	let instructions: string;
	let newWorkout: WorkoutType;
	function addItem(): void {
		let id = uuidv4();
		exercises = [...exercises, { exerciseName, instructions, id }];
		console.log(exerciseName, instructions);
		exerciseName = '';
		instructions = '';
	}
	function saveWorkout() {
		newWorkout = { workoutName, exercises };
	}
	$: console.log(newWorkout);
	$: numOfExercises = exercises.length + 1;
</script>

<div class="content-wrapper">
	<WorkoutNameInput bind:workoutName />
	<CreateWorkoutEntry bind:exerciseName bind:instructions {numOfExercises} />
	<div class="add-btn-wrapper">
		<button class="add-btn" on:click={addItem}>Add</button>
		<button on:click={saveWorkout} type="button" class="save-workout-btn">Save workout</button>
	</div>
	<ul class="exercise-list">
		{#each exercises as exercise, index (exercise.id)}
			<WorkoutEntry bind:exercises {exercise} {index} />
		{/each}
	</ul>
</div>

<style>
	.content-wrapper::-webkit-scrollbar {
		display: none;
	}
	.content-wrapper {
		background-color: rgb(242, 245, 248);
		display: block;
		overflow-y: auto;
		padding-block: 25px;
		width: 100%;
		padding-left: 30px;
		height: var(--min-height);
	}
	.exercise-list {
		list-style-type: none;
		display: grid;
		/* place-items: center; */
	}
	.add-btn {
		cursor: pointer;
		border-radius: 9999px;
		background-color: #0496ff;
		color: white;
		padding-inline: 10px;
		height: 30px;
		width: 80px;
		border: none;
		outline: none;
		align-items: center;
		font-weight: 500;
	}
	.add-btn-wrapper {
		display: block;
		width: fit-content;
		padding-block: 10px;
		/* margin-inline: auto; */
	}
	.save-workout-btn {
		background-color: #3e6680;
		padding-inline: 20px;
		padding-block: 8px;
		border-radius: 9999px;
		border: none;
		color: white;
		cursor: pointer;
	}
</style>
