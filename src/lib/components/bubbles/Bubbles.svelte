<script>
	import { random } from '../../utils/random.js'
	import Bubble from './Bubble.svelte'
</script>

<div id="bubbles">
	{#each Array(100) as _, i (i)}
		<Bubble
			--scale={random(2, 3.5) / 10}
			--offset="{i * random(8, 10)}%"
			--delay="{random(i, Math.min(i + 1, 5)) * random(100, 3000)}ms"
			--speed="{random(24, 22)}s"
		/>
	{/each}
</div>
