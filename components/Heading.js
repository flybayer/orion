import styled from "styled-components"
import { commonStyleProps, commonTypographyProps } from "./theme"

let Heading = styled.h1`
  ${commonStyleProps}
  ${commonTypographyProps}
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
