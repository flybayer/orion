import styled from "styled-components"
import ButtonBase from "./ButtonBase"

let MinimalButton = styled(ButtonBase)`
  // Support icons as children - text must be in <span>
  & > * + * {
    margin-left: 0.4rem;
  }

  &:hover:enabled,
  &:active:enabled,
  &:focus {
    background: rgba(0, 0, 0, 0.08);
  }
`

MinimalButton.defaultProps = {
  ...ButtonBase.defaultProps,
  color: "element",
  bg: "transparent",
  px: 1,
  py: 1,
}
MinimalButton.displayName = "MinimalButton"
export default MinimalButton
