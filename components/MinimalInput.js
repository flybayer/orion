import styled from "styled-components"
import { themeGet, util } from "styled-system"
import InputBase from "./InputBase"

let MinimalInput = styled(InputBase)`
  // Make the input background a darker version of what is underneath it
  background: rgba(0, 0, 0, 0.15);

  --focusBottomBorderAdditionalWidth: 2px;

  // Subtract border width from total padding
  // This is needed to ensure height matches other inputs and buttons
  --bottomPadding: calc(
    ${props => themeGet(`space.${props.py}`)(props)} - var(--focusBottomBorderAdditionalWidth)
  );
  padding-bottom: var(--bottomPadding);

  &:focus {
    border-color: ${themeGet("colors.elementFocus", "black")};
    border-style: solid;
    // Add border
    border-bottom-width: calc(
      ${props => util.px(props.borderBottom)} + var(--focusBottomBorderAdditionalWidth)
    );
    // Subtract additional border width from padding
    padding-bottom: calc(var(--bottomPadding) - var(--focusBottomBorderAdditionalWidth));
  }

  &:disabled {
    opacity: 0.45;
  }
`

MinimalInput.defaultProps = {
  ...InputBase.defaultProps,
  px: 1,
  py: 2,
  borderBottom: 2,
  borderColor: "element",
  borderRadius: 0,
}
MinimalInput.displayName = "MinimalInput"
export default MinimalInput
