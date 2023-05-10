import { writable } from 'svelte/store';

export type HarEntries = { text: string }[];

export const harStore = writable<HarEntries>([]);
