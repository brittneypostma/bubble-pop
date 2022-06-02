<script>
	import './lib/styles.css'
	import Bubbles from './lib/components/bubbles/Bubbles.svelte'
	import SideBar from './lib/components/SideBar.svelte'
	import Footer from './lib/components/Footer.svelte'
	import { session } from './lib/stores'
	import { onMount } from 'svelte/internal'
	onMount(() => {
		session.set(false)
	})
	// console.log($session)
</script>

<main>
	{#if $session === false}
		<h1>Bubble Pop</h1>
		<button on:click={() => session.set(true)}>Start Popping</button>
		<Footer />
	{:else}
		<SideBar />
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
