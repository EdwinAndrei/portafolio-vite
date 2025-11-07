import { defineConfig } from "vite";
import { globSync } from "glob";
import path from "path";

export default defineConfig({
  root: ".",
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync("*.html").map((file) => [
          path.basename(file, ".html"),
          path.resolve(file),
        ])
      ),
    },
    outDir: "dist",
  },
});