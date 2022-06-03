<script>
	import { session, lastScore, score } from '../stores'

	function stopGame() {
		lastScore.set($score)
		session.set(false)
	}
</script>

{#if $session}
	<aside>
		<h1>Bubble Pop</h1>
		<h2>{$score}</h2>
		<button on:click={stopGame}>Stop Game</button>
	</aside>
{:else if $lastScore !== null}
	<p>Previous High Score: {$lastScore}</p>
{/if}

<style>
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
	p,
	h1 {
		text-transform: uppercase;
		font-size: var(--size-7);
		text-align: center;
	}
</style>
