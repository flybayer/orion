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
  themeGet,
} from "styled-system"

let Text = styled.p`
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

	& + &,
	& + ol,
	& + ul,
	ol + &,
	ul + & {
		margin-top: ${themeGet("space.3")};
	}
`
Text.defaultProps = {
  color: "text",
  fontSize: 3,
  m: 0,
  maxWidth: "40em",
  lineHeight: 2,
}
Text.displayName = "Text"
export default Text
