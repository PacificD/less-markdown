/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 19:37:10
 * @LastEditTime: 2022-08-01 21:14:05
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\components\Editor\useEditor.ts
 */
import { javascript } from "@codemirror/lang-javascript"
import { useCodeMirror } from "@uiw/react-codemirror"
import { syntaxHighlighting, HighlightStyle, indentOnInput } from "@codemirror/language"
import { tags } from "@lezer/highlight"
import {
  EditorView,
  lineNumbers,
  highlightActiveLine,
  keymap,
  highlightActiveLineGutter
} from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
// import { markdown, markdownLanguage } from "@codemirror/lang-markdown"
// import { historyKeymap } from "@codemirror/history"
import React, { useEffect } from "react"

const markdownHighlighting = HighlightStyle.define([
  { tag: tags.heading1, fontSize: "1.6em", fontWeight: "bold" },
  {
    tag: tags.heading2,
    fontSize: "1.4em",
    fontWeight: "bold"
  },
  {
    tag: tags.heading3,
    fontSize: "1.2em",
    fontWeight: "bold"
  }
])

const useEditor = (container: React.RefObject<HTMLDivElement>) => {
  const { setContainer } = useCodeMirror({
    container: container.current,
    extensions: [
      javascript(),
      lineNumbers(),
      highlightActiveLine(),
      highlightActiveLineGutter(),
      indentOnInput(),
      // keymap.of([...defaultKeymap, ...historyKeymap]),
      // markdown({
      //   base: markdownLanguage //Support GFM
      // })
      syntaxHighlighting(markdownHighlighting)
    ],
    theme: "dark",
    height: "600px",
    value: "hello",
    basicSetup: {
      bracketMatching: true,
      closeBrackets: true,
      autocompletion: true
    }
  })

  useEffect(() => {
    if (container.current) {
      setContainer(container.current)
    }
  }, [container])

  return []
}

export default useEditor
