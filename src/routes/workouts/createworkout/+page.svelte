<script lang="ts">
	import { entryNumberStore, exerciseList, workoutNameStore } from '../../../stores';
	import WorkoutNameInput from '../../../components/CreateWorkout/ WorkoutNameInput.svelte';
	import Button from '../../../components/Elements/Button.svelte';
	import { uuidv4 } from '../../../utils/uuid';
	import CreateNewExerciseEntry from '../../../components/CreateWorkout/CreateNewExerciseEntry.svelte';
	import type { ExerciseListType, ExerciseType } from '$lib/typings';
	import ExerciseEntryList from '../../../components/CreateWorkout/ExerciseEntryList.svelte';

	let exerciseName: string = '';
	let instructions: string = '';

	const addItem = (): void => {
		if (exerciseName === '' || instructions === '') return;
		console.log(exerciseName);
		let id = uuidv4();
		let newExerciseEntry: ExerciseType = {
			exerciseName,
			instructions,
			id
		};
		$exerciseList = { exercises: [newExerciseEntry, ...$exerciseList.exercises] };
		$entryNumberStore++;
		exerciseName = '';
		instructions = '';
	};

	const saveWorkout = async () => {
		const newWorkout = { $workoutNameStore, $exerciseList };
		console.log($workoutNameStore, $exerciseList);
		try {
			await fetch('http://localhost:8000/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ data: newWorkout })
			});
		} catch (error) {
			console.log((error as Error).message);
		}
	};

	$: console.log($exerciseList);
</script>

<WorkoutNameInput />
<CreateNewExerciseEntry bind:instructions bind:exerciseName />
<div class="flex w-fit py-1 mx-auto">
	<Button func={addItem}>Add</Button>
	<Button func={saveWorkout}>Save workout</Button>
</div>
<ExerciseEntryList />
