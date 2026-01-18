<script lang="ts">
  import { setwallpaperMode } from "$lib/WallpaperMode.svelte";
  import { ssrModuleExportsKey } from "vite/module-runner";
  function scrollToTop(){
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
</script>
<div class="flex h-10 sticky top-0 justify-around gap-1 mono text-sm xl:text-xl 2xl:text-xl bg-ctp-base px-4 lg:px-10 z-50">
  <button class="flex-1 bg-ctp-surface2 rounded-tl-lg rounded-bl-lg px-10 hover:bg-ctp-lavender hover:text-ctp-surface0" onclick={()=>{setwallpaperMode("mobile"); scrollToTop();}}>Mobile</button>
  <button class="flex-1 bg-ctp-surface2 rounded-tr-lg rounded-br-lg px-10 hover:bg-ctp-lavender hover:text-ctp-surface0" onclick={()=>{setwallpaperMode("pc"); scrollToTop();}}>PC</button>
</div>