import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(() => {
    return {
        base: '/IPA-Chart-Generator/',
        build: {
            outDir: 'build',
        },
        plugins: [react(), VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'IPA Chart Generator',
                short_name: 'IPA Chart',
                start_url: '/IPA-Chart-Generator/',
                scope: '/IPA-Chart-Generator/',
                display: 'standalone',
                background_color: '#000000',
                theme_color: '#000000',
                icons: [
                    {
                        src: '/logo.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml',
                    },
                ],
            },
        })],
    };
});