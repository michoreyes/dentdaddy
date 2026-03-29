// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "DM Sans",
    cssVariable: "--font-dm"
  }],
  
});