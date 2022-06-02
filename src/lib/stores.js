import { writable } from 'svelte/store'
import { random } from './utils/random'

export const session = writable(false)

export const lastScore = writable(null)

export const score = writable(0)