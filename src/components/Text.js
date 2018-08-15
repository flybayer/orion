import system from "system-components"

const Text = system(
  {
    is: "p",
    m: 0,
  },
  "space",
  "color",
  "position",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "textAlign",
  "lineHeight",
  "minWidth",
  "maxWidth"
)

Text.displayName = "Text"
export default Text
