// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://conventionaldevs.org",
  integrations: [
    starlight({
      title: "Conventional Devs",
      social: {
        github: "https://github.com/koroutine/conventionaldevs.org",
      },
      sidebar: [
        {
          label: "Introduction",
          slug: "introduction",
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
    markdoc(),
  ],
});
