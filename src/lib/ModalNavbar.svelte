<script lang="ts">
    import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
    import DownloadIcon from '$lib/icons/DownloadIcon.svelte';
    interface Wallpaper{
        name:string,
        download_url:string,
        path:string
    }
    let {currentWall,closeModal}:{currentWall : Wallpaper,closeModal: VoidFunction}=$props()

    async function handleDownload(url:string,filename:string){
        try{
            const response = await fetch(url)
            const blob = await response.blob()
            const blobURL = window.URL.createObjectURL(blob)

            const link = document.createElement('a')
            link.href=blobURL
            link.download=filename
            document.body.appendChild(link)
            link.click()

            document.body.removeChild(link)
            window.URL.revokeObjectURL(blobURL)
        }
        catch (error) {
            console.log(error)
        }
    }
</script>

<div class="h-12 justify-between flex items-center z-60 px-4 gap-4">
            <button 
                class="p-2"
                onclick={()=>closeModal()}
            >
                <ArrowLeft className="h-8 w-8 lg:h-10 lg:w-10 hover:opacity-50"/>
            </button>
            <h6 class="hidden lg:block text-md grow">{currentWall.name}</h6>
            <button
                class="p-2 self-end"
                onclick={()=>handleDownload(`https://cdn.jsdelivr.net/gh/abhishekpaul724/catppuccin-mocha-wallpapers@main/${currentWall.path}`,currentWall.name)}
            >
                    <DownloadIcon className="h-10 w-10 pt-2 hover:opacity-50"/>
            </button>
        </div>