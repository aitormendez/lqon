import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({ nesting: true }),
    mdx(),
    favicons({
      masterPicture: "./src/assets/img/favicon-src.svg",
      emitAssets: true,

      // You should adjust the following options accordingly
      // appName: "",
      // appShortName: "",
      // appDescription: "",
      // dir:"auto",
      lang: "es-ES",
      // display: "standalone",
      // orientation: "any",
      // start_url: "/?homescreen=1",
      background: "#000",
      theme_color: "#000",
      faviconsDarkMode: false, // default `true`, Make favicon compatible with light and dark modes
    }),
  ],
  output: "server",
  adapter: netlify({
    functionName: "entry", // Netlify function name must be alphanumeric/hyphen/underscore
  }),
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        remarkPlugins: ["remark-gfm"],
      },
    ],
  },
});
