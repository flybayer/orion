import styled from "styled-components"
import { themeGet } from "styled-system"
import InputBase from "./InputBase"

let Input = styled(InputBase)`
  box-shadow: inset 0 0 0 1px ${themeGet("colors.element", "black")};

  &:focus {
    box-shadow: inset 0 0 0 2px ${themeGet("colors.elementFocus", "black")};
  }
`

Input.defaultProps = {
  ...InputBase.defaultProps,
  p: 2,
  borderRadius: "element",
}
Input.displayName = "Input"
export default Input
