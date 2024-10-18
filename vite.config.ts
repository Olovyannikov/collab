import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import vike from "vike/plugin";
import {resolve} from "node:path";
import svgr from "vite-plugin-svgr";


export default defineConfig({
    ssr: {noExternal: ["effector-factorio"]},
    build: {minify: false},
    plugins: [
        react({
            babel: {babelrc: true, plugins: ["@babel/plugin-syntax-import-attributes"]},
        }),
        vike({
            redirects: {},
        }),
        svgr({
            svgrOptions: {},
        }),
    ],
    define: {},
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
