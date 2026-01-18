<script lang="ts">
    import {getWallpaperMode} from '$lib/WallpaperMode.svelte'
    import ModalNavbar from '$lib/ModalNavbar.svelte';
    import ModalImg from '$lib/ModalImg.svelte';
    const {mobilewalls,pcwalls}=$props()
    const mobileAspect='aspect-[10/19.5]'
    const pcAspect='aspect-[16/9]'
    let Aspect = $derived((getWallpaperMode() === "mobile")?mobileAspect:pcAspect)

    interface Wallpaper{
        name:string,
        download_url:string,
        index:number
    }

    let selectedIndex:number=$state(-1)
    let currentWalls:Wallpaper[]=$derived(getWallpaperMode() === "mobile" ? mobilewalls : pcwalls)

    const openModal = (index:number) =>{ 
        selectedIndex = index;
    };
    const closeModal = () =>{ 
        selectedIndex=-1; 
    };

    let currentWall = $derived.by(()=>{
        if (selectedIndex < 0 || selectedIndex >= currentWalls.length){
            return null
        }
        else{
            return currentWalls[selectedIndex]
        }
    })
    const handleArrowLeft = () => {
        if (selectedIndex <=0 ){return}
        else {
            selectedIndex -= 1
        }
    }
    const handleArrowRight = () => {
        if (selectedIndex >= currentWalls.length -1 ){return}
        else {
            selectedIndex += 1
        }
    }
    const handleKeyDown = (event:KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {handleArrowLeft()}
        else if (event.key === 'ArrowRight') {handleArrowRight()}
        else if (event.key === 'Escape') {closeModal()}
    }
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 lg:px-10 py-4 gap-y-1 gap-x-1">
    {#if getWallpaperMode() === "mobile"}
        {@render gridItems(mobilewalls)}
    {:else}
        {@render gridItems(pcwalls)}
    {/if}
</div>


{#snippet gridItems(obj_name:Wallpaper[])}
    {#each obj_name as wall,index}
        <button 
            aria-label="Hi"
            onclick={()=>openModal(index)}
        >
            <div 
                class="{Aspect} bg-ctp-surface1 hover:opacity-60"
            >
                <img 
                    src={`https://wsrv.nl/?url=${wall.download_url}&output=webp&q=80&maxage=30d`} 
                    class="h-full w-full object-cover inset-0" 
                    alt={wall.name}
                    loading="lazy"
                    decoding="async"
                >
            </div>
        </button>
    {/each}
{/snippet}

{#if selectedIndex >=0 && currentWall}
    <div class="fixed inset-0 bg-ctp-mantle z-50 flex flex-col flex-1 gap-4"
        role="dialog"
        tabindex="-1"
        onkeydown={handleKeyDown}
    >
        <ModalNavbar {currentWall} {closeModal}/>
        <ModalImg 
        {currentWall} 
        {selectedIndex}
        total={currentWalls.length} 
        onPrevious={()=>selectedIndex-=1}
        onNext={()=>selectedIndex+=1}/>
    </div>
{/if}
<!--https://api.github.com/repos/{owner}/{repo}/contents/{path}-->
<!--https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{path_to_image}-->
<!--
{
        "name": "1728177789373_realcugan_Pro_2.0x_noise1_GPU-catppuccin-mocha.png",
        "path": "mobile-catppuccin-mocha-wallpapers/1728177789373_realcugan_Pro_2.0x_noise1_GPU-catppuccin-mocha.png",
        "sha": "798977e40643fe3323b649ddf329999de588e85c",
        "size": 3045750,
        "url": "https://api.github.com/repos/abhishekpaul724/catppuccin-mocha-wallpapers/contents/mobile-catppuccin-mocha-wallpapers/1728177789373_realcugan_Pro_2.0x_noise1_GPU-catppuccin-mocha.png?ref=main",
        "html_url": "https://github.com/abhishekpaul724/catppuccin-mocha-wallpapers/blob/main/mobile-catppuccin-mocha-wallpapers/1728177789373_realcugan_Pro_2.0x_noise1_GPU-catppuccin-mocha.png",
        "git_url": "https://api.github.com/repos/abhishekpaul724/catppuccin-mocha-wallpapers/git/blobs/798977e40643fe3323b649ddf329999de588e85c",
        "download_url": "https://raw.githubusercontent.com/abhishekpaul724/catppuccin-mocha-wallpapers/main/mobile-catppuccin-mocha-wallpapers/1728177789373_realcugan_Pro_2.0x_noise1_GPU-catppuccin-mocha.png",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/abhishekpaul724/catppuccin-mocha-wallpapers/contents/mobile-catppuccin-mocha-wallpapers/1728177789373_realcugan_Pro_2.0x_noise1_GPU-catppuccin-mocha.png?ref=main",
            "git": "https://api.github.com/repos/abhishekpaul724/catppuccin-mocha-wallpapers/git/blobs/798977e40643fe3323b649ddf329999de588e85c",
            "html": "https://github.com/abhishekpaul724/catppuccin-mocha-wallpapers/blob/main/mobile-catppuccin-mocha-wallpapers/1728177789373_realcugan_Pro_2.0x_noise1_GPU-catppuccin-mocha.png"
        }
    },
-->