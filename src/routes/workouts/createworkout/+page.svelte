<script lang="ts">
	import { entryNumberStore, exerciseList, workoutNameStore } from '../../../stores';
	import WorkoutNameInput from '../../../components/CreateWorkout/ WorkoutNameInput.svelte';
	import Button from '../../../components/Elements/Button.svelte';
	import { uuidv4 } from '../../../utils/uuid';
	import CreateNewExerciseEntry from '../../../components/CreateWorkout/CreateNewExerciseEntry.svelte';
	import type { ExerciseType } from '$lib/typings';
	import ExerciseEntryList from '../../../components/CreateWorkout/ExerciseEntryList.svelte';

	let exerciseName: string = '';
	let instructions: string = '';

	const addItem = (): void => {
		if (exerciseName === '' || instructions === '') return;
		console.log(exerciseName);
		let _id = uuidv4();
		let newExerciseEntry: ExerciseType = {
			exerciseName,
			instructions,
			_id
		};
		$exerciseList = { exercises: [...$exerciseList.exercises, newExerciseEntry] };
		$entryNumberStore++;
		exerciseName = '';
		instructions = '';
	};

	const saveWorkout = async () => {
		const newWorkout = { workoutName: $workoutNameStore, ...$exerciseList };

		try {
			const response = await fetch('/workouts', {
				method: 'POST',
				body: JSON.stringify({ newWorkout }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			$exerciseList.exercises = [];
			$entryNumberStore = 1;
			$workoutNameStore = '';
		} catch (error) {
			console.log(error || 'error');
		}
	};
</script>

<WorkoutNameInput />
<CreateNewExerciseEntry bind:instructions bind:exerciseName />
<div class="flex w-fit py-1 mx-auto">
	<Button func={addItem}>Add</Button>
	<Button func={saveWorkout}>Save workout</Button>
</div>
<ExerciseEntryList />
