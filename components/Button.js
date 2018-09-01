import system from "system-components"
import { css } from "styled-components"
import ButtonBase from "./ButtonBase"

const Button = system(
  // 1st argument is default props
  {
    is: ButtonBase,
    color: "white",
    bg: "element",
    px: 3,
    py: 2,
  },
  props => css`
    // Support icons as children - text must be in <span>
    & > *:first-child {
      margin-left: -0.2rem;
    }
    & > *:last-child {
      margin-right: -0.2rem;
    }
    & > * + * {
      margin-left: 0.4rem;
    }

    &:hover:enabled,
    &:active:enabled,
    &:focus {
      filter: brightness(80%) contrast(120%);
    }
    &:active:enabled {
      border-bottom: 0;
    }
  `
)

Button.displayName = "Button"
export default Button
