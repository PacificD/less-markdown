/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 17:01:18
 * @LastEditTime: 2022-08-02 16:28:43
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\pages\index.tsx
 */

import React from "react"
import { Title } from "../components"
import Editor from "./Editor"

const App = () => {
  return (
    <div id="app">
      <Title />
      <Editor />
    </div>
  )
}

export default App
