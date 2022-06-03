<script>
	import { afterUpdate, onMount } from 'svelte'
	import { random } from '../../utils/random.js'
	import { score, bubbles } from '../../stores'
	import Bubble from './Bubble.svelte'

	// if($score === 10) {
	// 	console.log('10')
	// }

	$: if ($score > 5) {
			bubbles.set($bubbles + 10)
			console.log($bubbles)
		}

 
	onMount(() => {
		bubbles.set(10)
	})
</script>

<div id="bubbles">
	{#each Array(10) as _, i (i)}
		<Bubble
			--scale={random(2, 3.5) / 10}
			--offset="{i * random(8, 10)}%"
			--delay="{random(i, Math.min(i + 1, 5)) * random(100, 3000)}ms"
			--speed="{random(15, 25)}s"
		/>
	{/each}
</div>
