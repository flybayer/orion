import styled from "styled-components"
import {
  fontSize,
  fontWeight,
  borders,
  borderRadius,
  borderColor,
  alignItems,
  justifyContent,
  boxShadow,
} from "styled-system"
import { commonStyleProps } from "./theme"

let ButtonBase = styled.button`
  ${commonStyleProps}
  ${fontSize}
  ${fontWeight}
  ${borders}
  ${borderRadius}
  ${borderColor}
  ${alignItems}
  ${justifyContent}
  ${boxShadow}

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

ButtonBase.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 2,
  fontWeight: "bold",
  fontFamily: "inherit",
  border: 0,
  borderRadius: "element",
  onClick: () => alert("TODO"),
  onTouchStart: () => {}, // Enable &:active for iOS Safari
}
ButtonBase.displayName = "ButtonBase"
export default ButtonBase
