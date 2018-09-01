import system from "system-components"
import { css } from "styled-components"

const InputBase = system(
  {
    is: "input",
    color: "text",
    bg: "transparent",
    fontSize: 2,
    fontFamily: "inherit",
    m: 0,
    width: "100%",
  },
  "color",
  "space",
  "fontSize",
  "fontWeight",
  "borderRadius",
  "width",
  "minWidth",
  "maxWidth",
  "flex",
  "justifySelf",
  "alignSelf",
  "order",
  "gridArea",
  "gridColumn",
  "gridRow",
  props => css`
    bug-fix: first line doesnt work;
    border: 0;

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
)

InputBase.displayName = "InputBase"
export default InputBase
