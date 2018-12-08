import styled from "styled-components"
import { flexDirection, flexWrap, alignItems, justifyContent } from "styled-system"
import { commonStyleProps, commonTypographyProps } from "./theme"

let Label = styled.label`
  ${commonStyleProps}
  ${commonTypographyProps}
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${justifyContent}
`

Label.defaultProps = {
  color: "label",
  fontSize: 3,
  display: "flex",
  mt: 0,
  mb: 0,
  maxWidth: "40em",
  lineHeight: 1.5,
}
Label.displayName = "Label"
export default Label
