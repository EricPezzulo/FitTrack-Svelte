import type { ExerciseType, ExerciseListType, Workout } from '$lib/typings';
import { writable } from 'svelte/store';

export const exerciseStore = writable<ExerciseType>({
	exerciseName: '',
	instructions: '',
	_id: ''
});

export const exerciseEntryCount = writable(0);

export const workoutNameStore = writable<string>('');
export const exerciseList = writable<ExerciseListType>({ exercises: [] });
export const entryNumberStore = writable<number>(1);

export const itemsStore = writable<Workout[]>([]);

function createCalanderModalStore() {
	const { set, subscribe, update } = writable<boolean>(false);
	return {
		subscribe,
		set,
		toggle: () => update((cur) => !cur)
	};
}

export const calendarModalStore = createCalanderModalStore();
