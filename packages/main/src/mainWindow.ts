/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 16:23:40
 * @LastEditTime: 2022-08-02 20:28:27
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\main\src\mainWindow.ts
 */
import { BrowserWindow, nativeImage, Tray, Menu, app, ipcMain, screen } from "electron"
import { join } from "path"
import { URL } from "url"
import logo from "../assets/logo.png"

const imgLogo = nativeImage.createFromDataURL(logo)

async function createWindow() {
  const browserWindow = new BrowserWindow({
    frame: false, // PRODUCTION --> false,
    icon: imgLogo,
    minWidth: 512,
    minHeight: 384,
    title: "Less Markdown",
    transparent: true,
    show: false, // Use the 'ready-to-show' event to show the instantiated BrowserWindow.
    vibrancy: "under-window",
    visualEffectState: "active",
    webPreferences: {
      webviewTag: false, // The webview tag is not recommended. Consider alternatives like an iframe or Electron's BrowserView. @see https://www.electronjs.org/docs/latest/api/webview-tag#warning
      contextIsolation: true,
      preload: join(__dirname, "../../preload/dist/index.cjs")
    }
  })

  const tray = new Tray(imgLogo)
  tray.setToolTip("Less Markdown")
  tray.setTitle("Less Markdown")
  tray.on("right-click", () => {
    const tempate = [
      {
        label: "无操作"
      },
      {
        label: "退出",
        click: () => app.quit()
      }
    ]
    const menuConfig = Menu.buildFromTemplate(tempate)
    tray.popUpContextMenu(menuConfig)
  })
  tray.on("click", () => {
    if (browserWindow.isVisible()) {
      browserWindow.hide()
    } else {
      browserWindow.show()
    }
  })

  /**
   * If the 'show' property of the BrowserWindow's constructor is omitted from the initialization options,
   * it then defaults to 'true'. This can cause flickering as the window loads the html content,
   * and it also has show problematic behaviour with the closing of the window.
   * Use `show: false` and listen to the  `ready-to-show` event to show the window.
   *
   * @see https://github.com/electron/electron/issues/25012 for the afford mentioned issue.
   */
  browserWindow.on("ready-to-show", () => {
    browserWindow?.show()

    if (import.meta.env.DEV) {
      browserWindow?.webContents.openDevTools()
    }
  })

  /**
   * URL for main window.
   * Vite dev server for development.
   * `file://../renderer/index.html` for production and test.
   */
  const pageUrl =
    import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined
      ? import.meta.env.VITE_DEV_SERVER_URL
      : new URL("../renderer/dist/index.html", "file://" + __dirname).toString()

  await browserWindow.loadURL(pageUrl)

  // browserWindow.on("resize", () => {
  //   const size = browserWindow.getSize(),
  //     sf = screen.getPrimaryDisplay()

  //   console.log(size, sf)
  // })

  // 退出程序
  ipcMain.on("window-close", function () {
    app.quit()
  })
  // 最小化
  ipcMain.on("window-minimize", function () {
    browserWindow.minimize()
  })
  // 全屏
  ipcMain.on("window-maximize", function () {
    browserWindow.setFullScreen(true)
  })
  // 退出全屏
  ipcMain.on("window-unmaximize", function () {
    browserWindow.setFullScreen(false)
  })

  return browserWindow
}

/**
 * Restore an existing BrowserWindow or Create a new BrowserWindow.
 */
export async function restoreOrCreateWindow() {
  let window = BrowserWindow.getAllWindows().find(w => !w.isDestroyed())

  if (window === undefined) {
    window = await createWindow()
  }

  if (window.isMinimized()) {
    window.restore()
  }

  window.focus()
}
