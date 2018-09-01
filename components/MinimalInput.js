import system from "system-components"
import { css } from "styled-components"
import { themeGet } from "styled-system"
import InputBase from "./InputBase"

const MinimalInput = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: InputBase,
    px: 1,
    py: 2,
    borderBottom: 2,
    borderColor: "element",
    borderRadius: 0,
  },
  props => css`
    // Make the input background a darker version of what is underneath it
    background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07));

    // Subtract border width from total padding
    // This is needed to ensure height matches other inputs and buttons
    --bottomPadding: calc(${themeGet(`space.${props.py}`)(props)} - 2px);
    padding-bottom: var(--bottomPadding);

    &:focus {
      border-color: ${themeGet("colors.elementFocus", "black")(props)};
      // Add to the border
      border-bottom-width: calc(${props.borderBottom}px + 2px);
      // Subtract additional border width from padding
      padding-bottom: calc(var(--bottomPadding) - 2px);
    }

    &:disabled {
      opacity: 0.45;
    }
  `
)

MinimalInput.displayName = "MinimalInput"
export default MinimalInput
