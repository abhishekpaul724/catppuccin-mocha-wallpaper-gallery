<script lang='ts'>
    import disclaimer from '$lib/Disclaimer.txt?raw'
    import ChevronDown from '$lib/icons/ChevronDown.svelte';
    let discOpen=$state(false)
</script>

<div class="text-wrap text-sm md:text-md lg:text-lg 2xl:text-xl  bg-ctp-surface0 border-1 border-solid border-ctp-blue rounded-lg mono p-1">
    <button class="w-full inline hover:bg-ctp-surface1 rounded-lg" onclick={()=>discOpen=!discOpen}>
    {#if !discOpen}
    <p class="flex"><span class="text-ctp-red">Disclaimer:</span> ... <span class="ml-auto"><ChevronDown className="h-8 w-8 text-ctp-text"/></span></p>
    {:else}
    {@html disclaimer}
    {/if}
    </button>
</div>