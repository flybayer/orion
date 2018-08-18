import system from "system-components"

const Label = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: "label",
    color: "label",
    fontSize: 2,
    display: "flex",
    flexDirection: "column",
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
  "maxWidth"
)

Label.displayName = "Label"
export default Label
