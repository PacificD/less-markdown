/*
 * @Author: Pacific_D
 * @Date: 2022-08-02 12:38:21
 * @LastEditTime: 2022-08-02 20:01:31
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\components\Title\index.tsx
 */
import "./index.css"
import React, { useRef } from "react"

declare global {
  interface Window {
    electronAPI: {
      maximize(): void
      unmaximize(): void
      minimize(): void
      close(): void
    }
  }
}

const Title = () => {
  const fullScreen = useRef<boolean>(false),
    appTitle = useRef<HTMLDivElement>(null)

  const toggleFullScreen = () => {
    if (fullScreen.current) {
      window.electronAPI.unmaximize()
      fullScreen.current = false
      appTitle.current!.style.borderRadius = "16px 16px 0 0"
    } else {
      window.electronAPI.maximize()
      fullScreen.current = true
      appTitle.current!.style.borderRadius = "0"
    }
  }

  return (
    <div id="app-title" ref={appTitle}>
      <div className="heading">
        <div>
          <img src="../../assets/logo.png"></img>
          <h1>Less Markdown</h1>
        </div>
      </div>
      <div className="app-toolbar">
        <img
          className="app-minimize"
          onClick={window.electronAPI.minimize}
          src="../../assets/tri.png"
        ></img>
        <div className="app-maximize" onClick={toggleFullScreen}></div>
        <img
          className="app-close"
          onClick={window.electronAPI.close}
          src="../../assets/close.png"
        ></img>
      </div>
    </div>
  )
}

export default Title
