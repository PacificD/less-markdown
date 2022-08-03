/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 17:01:18
 * @LastEditTime: 2022-08-03 10:19:52
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\pages\index.tsx
 */

import React from "react"
import { Title } from "../components"
import ToastEditor from "./ToastEditor"

const App = () => {
  return (
    <div id="app">
      <Title />
      <ToastEditor />
    </div>
  )
}

export default App
