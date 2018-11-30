import styled from "styled-components"
import {
  color,
  space,
  fontSize,
  fontWeight,
  borders,
  borderRadius,
  borderColor,
  width,
  minWidth,
  maxWidth,
  flex,
  alignItems,
  justifyContent,
  justifySelf,
  alignSelf,
  order,
  gridArea,
  gridColumn,
  gridRow,
} from "styled-system"

let ButtonBase = styled.button`
  ${color}
  ${space}
  ${fontSize}
  ${fontWeight}
  ${borders}
  ${borderRadius}
  ${borderColor}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${flex}
  ${alignItems}
  ${justifyContent}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${gridArea}
  ${gridColumn}
  ${gridRow}

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
  borderRadius: 2,
  onClick: () => alert("TODO"),
  onTouchStart: () => {}, // Enable &:active for iOS Safari
}
ButtonBase.displayName = "ButtonBase"
export default ButtonBase
