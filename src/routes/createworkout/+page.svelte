<script lang="ts">
	import type { ExercisesType, WorkoutType } from '$lib/typings';
	import { slide } from 'svelte/transition';
	import WorkoutNameInput from '../../components/CreateWorkout/ WorkoutNameInput.svelte';
	import CreateWorkoutEntry from '../../components/CreateWorkout/CreateWorkoutEntry.svelte';
	import WorkoutEntry from '../../components/CreateWorkout/WorkoutEntry.svelte';
	import { uuidv4 } from '../../utils/uuid';
	import UpcomingWorkouts from '../../components/CreateWorkout/UpcomingWorkouts.svelte';
	import TopBanner from '../../components/CreateWorkout/TopBanner.svelte';
	let exercises: ExercisesType = [];
	let workoutName: string;
	let exerciseName: string;
	let instructions: string;
	let newWorkout: WorkoutType;

	import { data } from '../../data';
	// console.log(data);
	function addItem(): void {
		let id = uuidv4();
		exercises = [{ exerciseName, instructions, id }, ...exercises];
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
	<TopBanner />
	<UpcomingWorkouts {exercises} {data} />
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
		display: flex;
		flex-direction: column;
		background-color: rgb(242, 245, 248);
		overflow-y: auto;
		padding-block: 25px;
		width: 100%;
		padding-left: 30px;
		height: var(--min-height);
	}
	.exercise-list {
		list-style-type: none;
		display: grid;
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
