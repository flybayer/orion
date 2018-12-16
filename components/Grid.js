import styled from "styled-components"
import {
  position,
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
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  boxShadow,
  overflow,
} from "styled-system"
import { commonStyleProps } from "./theme"

let Grid = styled.div`
  ${commonStyleProps}
  ${position}
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
  ${boxShadow}
  ${overflow}
`

Grid.defaultProps = { display: "grid" }
Grid.displayName = "Grid"
export default Grid
