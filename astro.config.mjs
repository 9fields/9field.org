import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://9field.org",
  output: "static",
  build: {
    format: "directory",
  },
});
