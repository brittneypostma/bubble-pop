<script>
	import { random } from '../../utils/random.js';
	import Bubble from './Bubble.svelte';
</script>

<div id="bubbles">
	{#each Array(10) as _, i (i)}
		<Bubble
			--scale={random(2, 3.5) / 10}
			--offset="{i * random(2, 8)}%"
			--delay="{random(1000, 5000)}ms"
			--speed="{random(12, 24)}s"
		/>
	{/each}
</div>
