<script>
	import { afterUpdate, onMount, tick } from 'svelte'
	import { random } from '../../utils/random.js'
	import { score, bubbles } from '../../stores'
	import Bubble from './Bubble.svelte'

	$: moreBubbles()

	async function moreBubbles() {
		bubbles.set(10)
		await tick()
		bubbles.set(10)
	}

	onMount(() => {
		moreBubbles()
	})
</script>

<div id="bubbles">
	{#key $score % 5}
		{#each Array(10) as _, i}
			<Bubble
				--scale={random(2, 3.5) / 10}
				--offset="{i * random(2, 8)}%"
				--delay="{random(i, Math.min(i + 1, 5)) * random(100, 3000)}ms"
				--speed="{random(10, 25)}s"
			/>
		{/each}
	{/key}
</div>
