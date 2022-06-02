import { writable } from 'svelte/store'

export const session = writable(false)

export const lastScore = writable(null)

export const score = writable(0)