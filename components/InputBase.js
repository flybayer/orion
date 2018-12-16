import styled from "styled-components"
import { fontSize, fontFamily, borders, borderRadius, boxShadow } from "styled-system"
import { commonStyleProps } from "./theme"

let InputBase = styled.input`
  // This is before the style functions so style functions can override it
  border: 0;

  ${commonStyleProps}
  ${fontSize}
  ${fontFamily}
  ${borders}
  ${borderRadius}
  ${boxShadow}

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0.4;
    }
  }

  &:disabled {
    color: inherit;
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.05);
  }

  // ------------------
  // Normalizing styles
  // ------------------
  appearance: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &[type="search"],
  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  // Correct the cursor style of increment and decrement buttons in Chrome.
  // &[type="number"]::-webkit-inner-spin-button,
  // &[type="number"]::-webkit-outer-spin-button {
  //   height: auto;
  // }
`

InputBase.defaultProps = {
  color: "text",
  bg: "transparent",
  fontSize: 3,
  fontFamily: "inherit",
  mt: 0,
  mb: 0,
  width: "100%",
}
InputBase.displayName = "InputBase"
export default InputBase
