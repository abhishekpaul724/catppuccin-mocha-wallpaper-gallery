<script lang="ts">
    interface Wallpaper{
        name:string,
        download_url:string,
        index:number
    }
    import ChevronLeft from "$lib/icons/ChevronLeft.svelte";
    import ChevronRight from "$lib/icons/ChevronRight.svelte";
    let {
        currentWall,
        selectedIndex,
        total,
        onPrevious,
        onNext
    }:{
        currentWall:Wallpaper,
        selectedIndex:number,
        total:number,
        onPrevious:()=>void,
        onNext:()=>void
    } = $props()
</script>

<div class="flex justify-between lg:px-4 items-center">
    <button 
        class="hover:opacity-60 disabled:invisible"
        disabled={selectedIndex <= 0}
        onclick={onPrevious}
        >
        <ChevronLeft className="h-8 w-8"/>
    </button>
    <img 
        src={currentWall.download_url} 
        alt=""
        class="max-w-[80vw] lg:max-h-[80vh] lg:max-w-[90vw] lg:max-h-[90vh]"
    >
    <button 
        class="hover:opacity-60 disabled:invisible"
        disabled={selectedIndex >= total-1}
        onclick={onNext}
    >
        <ChevronRight className="h-8 w-8"/>
    </button>
</div>