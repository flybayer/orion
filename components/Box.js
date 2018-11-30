import styled from "styled-components"
import {
  space,
  color,
  position,
  display,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  borders,
  borderRadius,
  flex,
  flexDirection,
  flexWrap,
  alignItems,
  alignSelf,
  justifyContent,
  justifySelf,
  gridColumn,
  gridRow,
  gridArea,
  overflow,
} from "styled-system"

let Box = styled.div`
  ${space}
  ${color}
  ${position}
  ${display}
  ${width}
  ${height}
  ${minWidth}
  ${maxWidth}
  ${minHeight}
  ${maxHeight}
  ${borders}
  ${borderRadius}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${alignSelf}
  ${justifyContent}
  ${justifySelf}
  ${gridColumn}
  ${gridRow}
  ${gridArea}
  ${overflow}
`

Box.defaultProps = {
  display: "flex",
  flexDirection: "row",
}
Box.displayName = "Box"
export default Box
