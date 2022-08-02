/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 16:23:40
 * @LastEditTime: 2022-08-02 19:49:26
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\preload\src\index.ts
 */
/**
 * @module preload
 */
// window.ipcRender = require("electron").ipcRenderer
const { ipcRenderer, contextBridge: cb } = require("electron")

cb.exposeInMainWorld("electronAPI", {
  maximize: () => ipcRenderer.send("window-maximize"),
  unmaximize: () => ipcRenderer.send("window-unmaximize"),
  minimize: () => ipcRenderer.send("window-minimize"),
  close: () => ipcRenderer.send("window-close")
})

export { sha256sum } from "./nodeCrypto"
export { versions } from "./versions"
