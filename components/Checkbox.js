import styled from "styled-components"
import { commonStyleProps } from "./theme"

let Checkbox = styled.input`
  ${commonStyleProps}
`

Checkbox.defaultProps = {
  type: "checkbox",
  m: 0,
  mr: 1,
  alignSelf: "center",
}
Checkbox.displayName = "Checkbox"
export default Checkbox
