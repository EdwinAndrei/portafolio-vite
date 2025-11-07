import { defineConfig } from "vite";
import path, { resolve } from "node:path";
import * as glob from "glob";

function obtenerEntradas() {
    return Object.fromEntries(
        glob.sync(
            './*.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
        ).map((file) => {
            return [
                file.replace('.html', ''),
                resolve(__dirname, file)
            ];
        })
    );
}

export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL || '/portafolio-vite/',

    build: {
        minify: true,
        rollupOptions: {
            input: obtenerEntradas()
        },
        outDir: 'dist'
    },
});