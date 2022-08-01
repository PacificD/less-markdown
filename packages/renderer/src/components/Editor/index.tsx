/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 17:10:48
 * @LastEditTime: 2022-08-01 20:21:52
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\components\Editor\index.tsx
 */

import React, { useEffect, useRef } from "react"
import { useCodeMirror } from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import useEditor from "./useEditor"

const code = "console.log('hello world!');\n\n\n"

const Editor = () => {
  const editor = useRef<HTMLDivElement>(null)

  useEditor(editor)

  return <div ref={editor} />
}

export default Editor
