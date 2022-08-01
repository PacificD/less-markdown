/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 16:23:40
 * @LastEditTime: 2022-08-01 17:12:37
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\index.tsx
 */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)
root.render(<App />)
