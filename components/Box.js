import styled from "styled-components"
import {
  position,
  minHeight,
  maxHeight,
  borders,
  borderRadius,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  boxShadow,
  overflow,
} from "styled-system"
import { commonStyleProps } from "./theme"

let Box = styled.div`
  ${commonStyleProps}
  ${position}
  ${minHeight}
  ${maxHeight}
  ${borders}
  ${borderRadius}
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${justifyContent}
  ${boxShadow}
  ${overflow}
`

Box.defaultProps = {
  display: "flex",
  flexDirection: "row",
}
Box.displayName = "Box"
export default Box
