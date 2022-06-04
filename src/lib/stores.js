import { writable, readable } from 'svelte/store'

export const session = writable(false)

export const score = writable(0)

export const finalScore = writable(10)

const savedScore = localStorage.score

export const lastScore = writable(savedScore || null)

lastScore.subscribe(score => localStorage.score = score)
