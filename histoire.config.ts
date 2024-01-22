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
                id: 'ui-layers',
                title: 'UI Layers',
            },
            {
                id: 'raster-layers',
                title: 'Raster Layers',
            },
            {
                id: 'vector-layers',
                title: 'Vector Layers',
            },
            {
                id: 'other-layers',
                title: 'Other Layers',
            },
            {
                id: 'basic-types',
                title: 'Basic Types',
            },
            {
                id: 'controls',
                title: 'Controls',
            }
        ],
    },
    vite: {
        base: import.meta.env.HISTOIRE_BUILD === 'true' ? '/svelte-leaflet/' : undefined,
    },
});
