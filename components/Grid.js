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
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  overflow,
} from "styled-system"

let Grid = styled.div`
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
  ${gridTemplateRows}
  ${gridTemplateColumns}
  ${gridTemplateAreas}
  ${gridAutoFlow}
  ${gridAutoRows}
  ${gridAutoColumns}
  ${gridGap}
  ${gridRowGap}
  ${gridColumnGap}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${justifyItems}
  ${overflow}
`

Grid.defaultProps = { display: "grid" }
Grid.displayName = "Grid"
export default Grid
