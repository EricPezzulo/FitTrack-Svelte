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

// <--  Meal Planning Stores:: Macronutrients  -->
export const fatsStore = writable<number>(0);
export const fatsTargetStore = writable<number>(100);
export const fatsTargetColorStore = writable<string>('text-[#E00000]');

export const caloriesStore = writable<number>(0);
export const caloriesTargetStore = writable<number>(3500);
export const caloriesTargetColorStore = writable<string>('text-[#E00000]');

export const proteinStore = writable<number>(0);
export const proteinTargetStore = writable<number>(200);
export const proteinTargetColorStore = writable<string>('text-[#E00000]');

export const carbohydratesStore = writable<number>(0);
export const carbohydratesTargetStore = writable<number>(500);
export const carbohydratesTargetColorStore = writable<string>('text-[#E00000]');

export const itemsStore = writable<Workout[]>([]);
