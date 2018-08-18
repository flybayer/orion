import system from "system-components"
import { css } from "styled-components"
import { themeGet } from "styled-system"

const Text = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: "p",
    color: "text",
    fontSize: 2,
    m: 0,
    maxWidth: "64ch",
    lineHeight: 2,
  },
  "space",
  "color",
  "position",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "fontStyle",
  "textAlign",
  "lineHeight",
  "letterSpacing",
  "minWidth",
  "maxWidth",
  props => css`
    & + & {
      margin-top: ${themeGet("space.3")(props)};
    }
  `
)

Text.displayName = "Text"
export default Text
