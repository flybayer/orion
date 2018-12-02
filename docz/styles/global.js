import { injectGlobal } from "emotion"
import "../../node_modules/codemirror/lib/codemirror.css"

injectGlobal`
  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .with-overlay {
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
  }
`
