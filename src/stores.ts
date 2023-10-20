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
	const { set, subscribe, update } = writable({
		isOpen: false,
		hasEvent: false
	});
	function findModalType(workoutId: string | undefined | null) {
		if (workoutId) {
			update((state) => {
				return {
					...state,
					hasEvent: true
				};
			});
		} else {
			update((state) => {
				return {
					...state,
					hasEvent: false
				};
			});
		}
	}
	return {
		subscribe,
		set,
		toggle: () =>
			update((state) => {
				return {
					...state,
					isOpen: !state.isOpen
				};
			}),
		findModalType
	};
}

export const calendarModalStore = createCalanderModalStore();
