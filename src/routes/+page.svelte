<script lang="ts">
    export let data;
    const {mobilewalls,pcwalls}=data
    import Header from "$lib/Header.svelte";
    import Navbar from "$lib/Navbar.svelte"
    import WallpaperGrid from "$lib/WallpaperGrid.svelte";
</script>

<div 
    class="w-screen flex flex-col gap-2 bg-ctp-base text-ctp-text selection:bg-ctp-surface2 overscroll-y-none"
>
    <Header/>
    <Navbar/>
    <main class="w-screen">
    <WallpaperGrid {mobilewalls} {pcwalls}/>
    </main>
</div>