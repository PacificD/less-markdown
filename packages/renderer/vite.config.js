/**
 * @Author: Pacific_D
 * @Date: 2022-08-01 16:23:40
 * @LastEditTime: 2022-08-01 17:05:14
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\vite.config.js
 */
/* eslint-env node */

import { chrome } from "../../.electron-vendors.cache.json"
import { join } from "path"
import { renderer } from "unplugin-auto-expose"

const PACKAGE_ROOT = __dirname

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      "/@/": join(PACKAGE_ROOT, "src") + "/"
    }
  },
  base: "",
  server: {
    fs: {
      strict: true
    }
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: "dist",
    assetsDir: ".",
    rollupOptions: {
      input: join(PACKAGE_ROOT, "index.html")
    },
    emptyOutDir: true,
    reportCompressedSize: false
  },
  test: {
    environment: "happy-dom"
  },
  plugins: [
    renderer.vite({
      preloadEntry: join(PACKAGE_ROOT, "../preload/src/index.ts")
    })
  ]
}

export default config
