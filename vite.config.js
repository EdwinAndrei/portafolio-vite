import { defineConfig } from "vite";
import { globSync } from "glob";
import path from "path";

export default defineConfig({
  appType: "mpa",

  base: "/portafolio-vite/",

  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync("./*.html").map((file) => [
          path.basename(file, ".html"),
          path.resolve(__dirname, file),
        ])
      ),
    },
    outDir: "dist",
  },
});