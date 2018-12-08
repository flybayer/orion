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
  width,
  minWidth,
  maxWidth,
  flex,
  alignSelf,
  justifySelf,
  gridColumn,
  gridRow,
  gridArea,
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
  ${width}
  ${minWidth}
  ${maxWidth}
  ${flex}
  ${alignSelf}
  ${justifySelf}
  ${gridColumn}
  ${gridRow}
  ${gridArea}

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
  mt: 0,
  mb: 0,
  maxWidth: "40em",
  lineHeight: 1.5,
}
Text.displayName = "Text"
export default Text
