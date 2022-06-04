<script>
	import { finalScore } from '../stores';
</script>

<aside class="glass">
	<label>
		Winning Score:
		<input class="glass" min="1" max="100" type="number" name="score" bind:value={$finalScore} />
	</label>
</aside>

<style>
	aside {
		margin: var(--size-4);
		position: absolute;
		top: 0;
		left: 0;
	}
	label {
		display: flex;
		gap: var(--size-1);
	}
	input {
		margin: 0;
		padding: var(--size-1) var(--size-2);
	}
</style>
