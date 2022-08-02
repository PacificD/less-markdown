/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 16:23:40
 * @LastEditTime: 2022-08-02 12:39:57
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\index.tsx
 */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./pages"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)
root.render(<App />)
