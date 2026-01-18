const wallpaperMode=$state({'mode':'mobile'})

export function setwallpaperMode(value: string){
    wallpaperMode.mode = value;
}

export function getWallpaperMode(){
    return wallpaperMode.mode;
}