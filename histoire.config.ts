import {defineConfig} from 'histoire';
import {HstSvelte} from '@histoire/plugin-svelte';

export default defineConfig({
    outDir: 'build/histoire',
    routerMode: 'hash',
    setupFile: 'src/stories/setup.ts',
    plugins: [
        HstSvelte(),
    ],
    theme: {
        title: 'svelte-leaflet',
    },
    tree: {
        groups: [
            {
                id: 'top',
                title: '',
            },
            {
                id: 'layers',
                title: 'Layers',
            }
        ],
    },
    vite: {
        base: import.meta.env.HISTOIRE_BUILD === 'true' ? '/svelte-leaflet/' : undefined,
    },
});
