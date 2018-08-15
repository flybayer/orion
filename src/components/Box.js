import system from "system-components"

const Box = system(
  {
    display: "flex",
    flexDirection: "row",
  },
  "space",
  "color",
  "position",
  "display",
  "width",
  "height",
  "minWidth",
  "maxWidth",
  "minHeight",
  "maxHeight",
  "borders",
  "borderRadius",
  "flex",
  "flexDirection",
  "flexWrap",
  "alignItems",
  "alignSelf",
  "justifyContent",
  "justifySelf",
  "gridColumn",
  "gridRow",
  "gridArea",
  "overflow"
)

Box.displayName = "Box"
export default Box
