import styled from "styled-components"
import {
  space,
  color,
  position,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
  minWidth,
  maxWidth,
} from "styled-system"

let Heading = styled.h1`
  ${space}
  ${color}
  ${position}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${fontStyle}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${minWidth}
  ${maxWidth}
`
Heading.defaultProps = {
  color: "heading",
  fontSize: 5,
  fontWeight: 700,
  mt: 0,
  mb: 3,
}
Heading.displayName = "Heading"
export default Heading
