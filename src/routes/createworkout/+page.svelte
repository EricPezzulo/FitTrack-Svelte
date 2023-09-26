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

<body>
	<main>
		<div class="wrapper">
			<h1>Create a workout</h1>
			<WorkoutNameInput bind:workoutName />

			<CreateWorkoutEntry bind:exerciseName bind:instructions {numOfExercises} />
			<div class="add-btn-wrapper">
				<button class="add-btn" on:click={addItem}>Add</button>
				<button on:click={saveWorkout} type="button" class="save-workout-btn">Save workout</button>
			</div>
			<ul class="exercise-list">
				{#each exercises as exercise, index}
					<WorkoutEntry bind:exercises {exercise} {index} />
				{/each}
			</ul>
		</div>
	</main>
</body>

<style>
	main {
		display: grid;
		/* place-items: center; */
		/* min-height: 100vh; */
		/* background-color: #0496ff; */
	}
	h1 {
		font-size: 28px;
		font-weight: 600;
		font-family: 'Sofia', sans-serif !important;
	}
	.wrapper {
		display: block;
		width: 100%;
		height: auto;
		padding-block: 25px;
	}
	.exercise-list {
		/* width: 100%; */
		list-style-type: none;
		display: grid;
		place-items: center;
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
		margin-inline: auto;
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
