import { injectGlobal } from "emotion"
import "../../node_modules/codemirror/lib/codemirror.css"

injectGlobal`
  .icon-link {
    display: none;
  }

  .with-overlay {
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
  }
`
