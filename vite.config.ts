import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    plugins: [solidPlugin()],
    server: {
        port: 5173,
        strictPort: true,
    },
    build: {
        target: 'esnext',
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
