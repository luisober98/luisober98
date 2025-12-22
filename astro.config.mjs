import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        applyBaseStyles: false, // We'll handle this in global.css if needed, or let Astro do it.
    })],
});
