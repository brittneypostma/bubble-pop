<script>
	import { fly, fade } from 'svelte/transition';
	import { session, lastScore, score, finalScore } from '../stores';
	import { ConfettiExplosion } from 'svelte-confetti-explosion';

	function resetGame() {
		const highScore = $score > $lastScore ? $score : $lastScore;
		lastScore.set(highScore);
		session.set(false);
	}
	let bubbles = document.querySelector('#bubbles');

	$: if ($score === $finalScore) {
		if (bubbles) bubbles.style.display = 'none';
	}
</script>

{#if $score === $finalScore && $session}
	<section in:fly={{ y: 200, duration: 1000 }}>
		<h1>You Win 🥳</h1>
		<button on:click={resetGame}>Play Again</button>
	</section>
	<div>
		<ConfettiExplosion />
	</div>
{:else if $session}
	<aside transition:fade>
		<h1>Bubble Pop</h1>
		<h2>{$score}</h2>
		<button on:click={resetGame}>Stop Game</button>
	</aside>
{/if}

<style>
	section {
		position: absolute;
	}
	div {
		display: flex;
		justify-content: center;
	}
	aside {
		display: grid;
		gap: var(--size-1);
		text-align: center;
		max-width: var(--size-xs);
		position: absolute;
		bottom: 0;
		background: var(--navy);
		color: var(--white);
		border-radius: var(--radius-blob-2);
		border: 2px solid var(--white);
		margin: var(--size-4) auto;
		padding: var(--size-10);
	}
	/* h1 {
		text-transform: uppercase;
		font-size: var(--size-7);
		text-align: center;
	} */
</style>
