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
  fontSize: 2,
  mt: 0,
  mb: 0,
  maxWidth: "35em",
  lineHeight: "normal",
}
Text.displayName = "Text"
export default Text
