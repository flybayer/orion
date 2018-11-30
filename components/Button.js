import styled from "styled-components"
import ButtonBase from "./ButtonBase"

let Button = styled(ButtonBase)`
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

Button.defaultProps = {
  ...ButtonBase.defaultProps,
  color: "white",
  bg: "element",
  px: 3,
  py: 2,
}
Button.displayName = "Button"
export default Button
