import type {PageServerLoad} from './$types'
import {error} from '@sveltejs/kit'
import { GH_TOKEN } from '$env/static/private';

export const load: PageServerLoad=(async ({fetch}) =>{
    const headers={
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${GH_TOKEN}`
    }
    const [mobileres , pcres] = await Promise.all(
        [
            fetch('https://api.github.com/repos/abhishekpaul724/catppuccin-mocha-wallpapers/contents/mobile-catppuccin-mocha-wallpapers',{headers}),
            fetch('https://api.github.com/repos/abhishekpaul724/catppuccin-mocha-wallpapers/contents/pc-catppuccin-mocha-wallpapers',{headers})
        ]
    )
    if (!mobileres.ok){
        throw error(500,await mobileres.text())
    }
    if (!pcres.ok){
        throw error(500,await pcres.text())
    }
    const mobilewalls = await mobileres.json()
    const pcwalls = await pcres.json()
    return {
        mobilewalls,pcwalls
    };
});