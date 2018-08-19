import system from "system-components"

const Label = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: "label",
    color: "label",
    fontSize: 2,
    display: "flex",
  },
  "space",
  "color",
  "position",
  "display",
  "width",
  "height",
  "fontFamily",
  "fontSize",
  "fontWeight",
  // "fontStyle",
  "textAlign",
  "lineHeight",
  "letterSpacing",
  "minWidth",
  "maxWidth",
  "flex",
  "flexDirection",
  "flexWrap",
  "alignItems",
  "alignSelf",
  "justifyContent",
  "justifySelf",
  "gridColumn",
  "gridRow",
  "gridArea"
)

Label.displayName = "Label"
export default Label
