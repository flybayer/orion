import system from "system-components"
import { css } from "styled-components"
import { themeGet } from "styled-system"
import InputBase from "./InputBase"

const Input = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: InputBase,
    p: 2,
    borderRadius: 2,
  },
  props => css`
    box-shadow: inset 0 0 0 1px ${themeGet("colors.element", "black")(props)};

    &:focus {
      box-shadow: inset 0 0 0 2px ${themeGet("colors.elementFocus", "black")(props)};
    }
  `
)

Input.displayName = "Input"
export default Input
