<script>
	import './lib/styles.css';
	import Bubbles from './lib/components/bubbles/Bubbles.svelte';
	import GameBar from './lib/components/GameBar.svelte';
	import Footer from './lib/components/Footer.svelte';
	import { score, session, lastScore } from './lib/stores';
	import { onMount } from 'svelte/internal';
	onMount(() => {
		session.set(false);
	});

	function startGame() {
		score.set(0);
		session.set(true);
	}
</script>

<main>
	<GameBar />
	{#if !$session}
		<h1>Bubble Pop</h1>
		<button on:click={startGame}>Start Popping</button>
		{#if $lastScore !== 'null'}
			<h2>Previous High Score: {$lastScore}</h2>
		{/if}
		<Footer />
	{:else if $session}
		<Bubbles />
	{/if}
</main>

<style>
	main {
		display: grid;
		min-height: 100vh;
		place-items: center;
		place-content: center;
		gap: var(--size-4);
	}
</style>
