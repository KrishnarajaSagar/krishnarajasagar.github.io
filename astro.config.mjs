import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://krishnarajasagar.github.io",
  // Repo is <user>.github.io, so no base needed
  output: "static",
  redirects: {
    "/": "/me",
  },
});
