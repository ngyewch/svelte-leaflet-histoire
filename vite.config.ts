import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        svelte(),
    ],
    build: {
        sourcemap: true,
        minify: false,
        lib: {
            formats: ['es'],
            entry: './src/index.ts',
        },
        rollupOptions: {
            external: [
                "@histoire/app",
            ],
        }
    }
});
