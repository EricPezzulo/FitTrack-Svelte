import { writable } from 'svelte/store';

export const month = writable<number>(new Date().getMonth());
