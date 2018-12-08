import styled from "styled-components"
import {
  space,
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
} from "styled-system"
import Text from "./Text"

let Label = styled(Text.withComponent("label"))`
  ${display}
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${justifyContent}
`

Label.defaultProps = {
  ...Text.defaultProps,
  color: "label",
  display: "flex",
}
Label.displayName = "Label"
export default Label
