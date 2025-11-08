import { defineConfig } from "vite";
import path, { resolve } from "node:path";
import * as glob from "glob";

function obtenerEntradas() {
    return Object.fromEntries(
        glob.sync('./*.html', {
            ignore: ['./dist/**', './node_modules/**']
        }).map((file) => [
            file.slice(0, file.length - path.extname(file).length),
            resolve(__dirname, file)
        ])
    );
}

export default defineConfig({
    appType: 'mpa',

    base: "/portafolio-vite/",

    build: {
        outDir: "dist",
        assetsDir: "assets",
        minify: true,

        rollupOptions: {
            input: obtenerEntradas(),
        }
    },
});