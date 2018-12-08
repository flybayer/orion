import styled from "styled-components"
import { themeGet } from "styled-system"
import { commonStyleProps, commonTypographyProps } from "./theme"

let Text = styled.p`
  ${commonStyleProps}
  ${commonTypographyProps}

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
