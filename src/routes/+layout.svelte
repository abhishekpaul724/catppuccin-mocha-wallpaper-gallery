<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
	<!--<link rel="icon" href={favicon} />-->
	<title>Catppuccin Mocha Wallpapers</title>
</svelte:head>

{@render children()}
