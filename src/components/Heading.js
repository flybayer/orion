import system from "system-components"

const Heading = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: "h1",
    color: "heading",
    fontSize: 5,
    fontWeight: "bold",
    mt: 0,
    mb: 3,
    lineHeight: 2,
  },
  "space",
  "color",
  "position",
  "fontFamily",
  "fontSize",
  "fontWeight",
  // "fontStyle",
  "textAlign",
  "lineHeight",
  "letterSpacing",
  "minWidth",
  "maxWidth"
)

Heading.displayName = "Heading"
export default Heading
