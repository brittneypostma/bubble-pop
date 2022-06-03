import { writable } from 'svelte/store'

export const session = writable(false)

export const bubbles = writable(0)

export const score = writable(0)

const savedScore = localStorage.score

// const highScore = savedScore > score ? savedScore : score

export const lastScore = writable(savedScore || null)

lastScore.subscribe(score => localStorage.score = score)