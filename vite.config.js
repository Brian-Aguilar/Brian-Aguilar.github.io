import { resolve } from "path"
import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"


export default defineConfig({
    plugins: [pugPlugin({localImports: true, pretty: true})],
    build: {
        outDir: 'doc/',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html')
            }
        }
    },
    publicDir: true
})