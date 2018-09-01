import system from "system-components"
import { css } from "styled-components"

const ButtonBase = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: "button",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 2,
    fontWeight: "bold",
    fontFamily: "inherit",
    border: 0,
    borderRadius: 2,
    onClick: () => alert("TODO"),
    onTouchStart: () => {}, // Enable &:active for iOS Safari
  },
  "color",
  "space",
  "fontSize",
  "fontWeight",
  "borders",
  "borderRadius",
  "borderColor",
  "width",
  "minWidth",
  "maxWidth",
  "flex",
  "alignItems",
  "justifyContent",
  "justifySelf",
  "alignSelf",
  "order",
  "gridArea",
  "gridColumn",
  "gridRow",
  props => css`
    bug-fix: first line doesnt work;
    text-overflow: ellipsis;

    // Support icons as children - text must be in <span>
    & > * + * {
      margin-left: 0.4rem;
    }

    &:disabled {
      opacity: 0.5;
    }

    &:active:enabled,
    &:focus {
      outline: none;
      transform: scale(0.97);
    }

    // ------------------
    // Normalizing styles
    // ------------------
    appearance: none; //Use our own apperance styles
    touch-action: manipulation; //Disable double tap to speed up click event
    text-transform: none; //Remove the inheritance  in Edge, Firefox, and IE.
    user-select: none; //Disable text selection
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // Remove iOS Safari touch shadow
    &::-moz-focus-inner {
      //Remove the inner border and padding in Firefox.
      border-style: none;
      padding: 0;
    }
  `
)

ButtonBase.displayName = "ButtonBase"
export default ButtonBase
