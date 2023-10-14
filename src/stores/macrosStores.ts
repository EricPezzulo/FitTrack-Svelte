import { writable } from 'svelte/store';
import type { Writable, Subscriber, Unsubscriber } from 'svelte/store';
// <--  Meal Planning Stores:: Macronutrients  -->

type ExtendedStoreNumber = {
	subscribe: (run: Subscriber<number>) => Unsubscriber;
	reset: () => void;
	increment: (count: number) => void;
	set: (this: void, value: number) => void;
};
type ExtendedStoreString = {
	subscribe: (run: Subscriber<string>) => Unsubscriber;
	satisfied: () => void;
	unsatisfied: () => void;
	reset: () => void;
};

// <-- Fats -->

function createFatsStore(): ExtendedStoreNumber {
	const { subscribe, set, update } = writable<number>(0);
	return {
		subscribe,
		set,
		reset: () => set(0),
		increment: (count: number) => update((current) => (current += count))
	};
}
export const fatsStore = createFatsStore();

function createFatsTargetStore(): Writable<number> {
	const { subscribe, set, update } = writable<number>(100);

	return {
		subscribe,
		update,
		set
	};
}
export const fatsTargetStore = createFatsTargetStore();

function createFatsTargetColorStore(): ExtendedStoreString {
	const { subscribe, set } = writable<string>('text-[#E00000]');
	return {
		subscribe,
		satisfied: () => set('text-green-500'),
		unsatisfied: () => set('text-[#E00000]'),
		reset: () => set('text-[#E00000]')
	};
}
export const fatsTargetColorStore = createFatsTargetColorStore();

// <-- Calories -->

function createCaloriesStore(): ExtendedStoreNumber {
	const { subscribe, set, update } = writable<number>(0);
	return {
		subscribe,
		set,
		reset: () => set(0),
		increment: (count: number) => update((current) => (current += count))
	};
}
export const caloriesStore = createCaloriesStore();

function createCaloriesTargetColorStore(): ExtendedStoreString {
	const { subscribe, set } = writable<string>('text-[#E00000]');
	return {
		subscribe,
		satisfied: () => set('text-green-500'),
		unsatisfied: () => set('text-[#E00000]'),
		reset: () => set('text-[#E00000]')
	};
}
export const caloriesTargetColorStore = createCaloriesTargetColorStore();
function createCaloriesTargetStore(): Writable<number> {
	const { subscribe, update, set } = writable<number>(3500);
	return {
		subscribe,
		update,
		set
	};
}
export const caloriesTargetStore = createCaloriesTargetStore();

// <--  Protein -->

function createProteinStore(): ExtendedStoreNumber {
	const { subscribe, set, update } = writable<number>(0);
	return {
		subscribe,
		set,
		reset: () => set(0),
		increment: (count: number) => update((current) => (current += count))
	};
}
export const proteinStore = createProteinStore();

function createProtienTargetStore(): Writable<number> {
	const { subscribe, set, update } = writable<number>(200);
	return {
		subscribe,
		set,
		update
	};
}
export const proteinTargetStore = createProtienTargetStore();

function createProtienTargetColorStore(): ExtendedStoreString {
	const { subscribe, set } = writable<string>('text-[#E00000]');
	return {
		subscribe,
		satisfied: () => set('text-green-500'),
		unsatisfied: () => set('text-[#E00000]'),
		reset: () => set('text-[#E00000]')
	};
}
export const proteinTargetColorStore = createProtienTargetColorStore();

// <-- Carbohydrates -->

function createCarbohydratesStore(): ExtendedStoreNumber {
	const { subscribe, set, update } = writable<number>(0);
	return {
		subscribe,
		set,
		reset: () => set(0),
		increment: (count: number) => update((current) => (current += count))
	};
}
export const carbohydratesStore = createCarbohydratesStore();

function createCarbohydratesTargetStore(): Writable<number> {
	const { update, subscribe, set } = writable<number>(500);
	return {
		subscribe,
		update,
		set
	};
}
export const carbohydratesTargetStore = createCarbohydratesTargetStore();

function createCarbohydratesTargetColorStore(): ExtendedStoreString {
	const { subscribe, update, set } = writable<string>('text-[#E00000]');
	return {
		subscribe,
		satisfied: () => update(() => 'text-green-500'),
		unsatisfied: () => update(() => 'text-[#E00000]'),
		reset: () => set('text-[#E00000]')
	};
}
export const carbohydratesTargetColorStore = createCarbohydratesTargetColorStore();
