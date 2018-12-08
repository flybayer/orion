import styled from "styled-components"
import { commonStyleProps } from "./theme"

let Radio = styled.input`
  ${commonStyleProps}
`

Radio.defaultProps = {
  type: "radio",
  m: 0,
  mr: 1,
  alignSelf: "center",
}
Radio.displayName = "Radio"
export default Radio
