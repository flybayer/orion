import system from 'system-components'

import {style} from 'styled-system'
const justifyItems = style({
  prop: 'justifyItems'
})

const Grid = system(
  {display: 'grid'},
  'space',
  'color',
  'width',
  'minWidth',
  'maxWidth',
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'gridTemplateRows',
  'gridTemplateColumns',
  // 'gridTemplateAreas',
  justifyItems,
  'alignItems',
  'overflow',
)

Grid.displayName = 'Grid'
export default Grid
