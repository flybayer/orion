import system from "system-components"
import { css } from "styled-components"
import ButtonBase from "./ButtonBase"

const MinimalButton = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: ButtonBase,
    color: "element",
    bg: "transparent",
    px: 1,
    py: 1,
  },
  props => css`
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
)

MinimalButton.displayName = "MinimalButton"
export default MinimalButton
