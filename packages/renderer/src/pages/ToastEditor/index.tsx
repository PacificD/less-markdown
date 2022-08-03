/*
 * @Author: Pacific_D
 * @Date: 2022-08-03 10:18:46
 * @LastEditTime: 2022-08-03 18:06:24
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\renderer\src\pages\ToastEditor\index.tsx
 */
import React, { FC, useEffect, useRef } from "react"
import "@toast-ui/editor/dist/toastui-editor.css"
import "@toast-ui/editor/dist/toastui-editor-viewer.css"
import "@toast-ui/editor/dist/toastui-editor-only.css"
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"
import "./index.css"
import { Editor } from "@toast-ui/react-editor"

import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell"
import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css"
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight"
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"
import "prismjs/themes/prism.css"
import Prism from "prismjs"

import "prismjs/components/prism-c.js"
import "prismjs/components/prism-cpp.js"
import "prismjs/components/prism-css.js"
import "prismjs/components/prism-dart.js"
import "prismjs/components/prism-docker.js"
import "prismjs/components/prism-erlang.js"
import "prismjs/components/prism-fortran.js"
import "prismjs/components/prism-git.js"
import "prismjs/components/prism-go.js"
import "prismjs/components/prism-graphql.js"
import "prismjs/components/prism-groovy.js"
import "prismjs/components/prism-haskell.js"
import "prismjs/components/prism-http.js"
import "prismjs/components/prism-ini.js"
import "prismjs/components/prism-java.js"
import "prismjs/components/prism-javascript.js"
import "prismjs/components/prism-jq.js"
import "prismjs/components/prism-js-extras.js"
import "prismjs/components/prism-js-templates.js"
import "prismjs/components/prism-json.js"
import "prismjs/components/prism-jsx.js"
import "prismjs/components/prism-jsonp.js"
import "prismjs/components/prism-julia.js"
import "prismjs/components/prism-kotlin.js"
import "prismjs/components/prism-latex.js"
import "prismjs/components/prism-less.js"
import "prismjs/components/prism-lua.js"
import "prismjs/components/prism-markdown.js"
import "prismjs/components/prism-mongodb.js"
import "prismjs/components/prism-nginx.js"
import "prismjs/components/prism-objectivec.js"
import "prismjs/components/prism-opencl.js"
import "prismjs/components/prism-parser.js"
import "prismjs/components/prism-perl.js"
import "prismjs/components/prism-powershell.js"
import "prismjs/components/prism-properties.js"
import "prismjs/components/prism-pure.js"
import "prismjs/components/prism-python.js"
import "prismjs/components/prism-regex.js"
import "prismjs/components/prism-ruby.js"
import "prismjs/components/prism-rust.js"
import "prismjs/components/prism-sass.js"
import "prismjs/components/prism-scala.js"
import "prismjs/components/prism-scheme.js"
import "prismjs/components/prism-scss.js"
import "prismjs/components/prism-solidity.js"
import "prismjs/components/prism-sql.js"
import "prismjs/components/prism-swift.js"
import "prismjs/components/prism-stylus.js"
import "prismjs/components/prism-stan.js"
import "prismjs/components/prism-toml.js"
import "prismjs/components/prism-tsx.js"
import "prismjs/components/prism-typescript.js"
import "prismjs/components/prism-uri.js"
import "prismjs/components/prism-verilog.js"
import "prismjs/components/prism-vim.js"
import "prismjs/components/prism-visual-basic.js"
import "prismjs/components/prism-wasm.js"
import "prismjs/components/prism-wiki.js"
import "prismjs/components/prism-xml-doc.js"
import "prismjs/components/prism-yaml.js"

function createLastButton() {
  const button = document.createElement("button")

  button.className = "toastui-editor-toolbar-icons last"
  button.style.backgroundImage = "none"
  button.style.margin = "0"
  button.innerHTML = "<i>B</i>"
  button.addEventListener("click", () => {
    console.log("ha")
  })

  return button
}

const toolbar = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote"],
  ["ul", "ol", "task", "indent", "outdent"],
  ["table", "image", "link"],
  ["code", "codeblock"],
  [
    {
      name: "haha",
      command: "bold",
      tooltip: "Custom Bold"
    }
  ]
]

const ToastEditor: FC = () => {
  const editorRef = useRef<Editor>(null)

  return (
    <Editor
      autofocus
      height="calc(100vh - 50px)"
      hideModeSwitch={false}
      initialEditType="wysiwyg" // markdown | wysiwyg
      initialValue="hello react editor world!"
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }], tableMergedCell]}
      previewStyle="vertical" // tab - 通过tab切换write和preview，vertical - 左边write右边preview
      ref={editorRef}
      theme="dark"
      toolbarItems={toolbar}
      usageStatistics={false}
      useCommandShortcut
    />
  )
}

export default ToastEditor
