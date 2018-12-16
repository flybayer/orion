import { createGlobalStyle } from "styled-components"

const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529",
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a",
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d",
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c",
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4",
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7",
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab",
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285",
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b",
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e",
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d",
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700",
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f",
  ],
}

const colors = {
  ...baseColors,
  text: baseColors.black,
  label: baseColors.black,
  heading: baseColors.black,
  primary: baseColors.black,
  element: baseColors.black,
  elementFocus: baseColors.black,
}

const breakpoints = ["576px", "768px", "992px", "1200px"]

const space = [
  0,
  "0.25rem",
  "0.5rem",
  "0.75rem",
  "1rem",
  "1.5rem",
  "2rem",
  "3rem",
  "4rem",
  "6rem",
  "8rem",
  "12rem",
  "16rem",
  "24rem",
  "32rem",
  "40rem",
  "48rem",
]

const fontSizes = [
  "0.75rem",
  "0.875rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "1.875rem",
  "2.25rem",
  "3rem",
  "3.75rem",
  "4.5rem",
]

const fonts = {
  sans:
    "system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  serif:
    "Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  mono: "SF Mono, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
}

const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
}
const letterSpacings = {
  tight: "-0.05em",
  normal: 0,
  loose: "0.05em",
}

const radii = {
  0: 0,
  1: "0.125rem",
  2: "0.25rem",
  3: "0.5rem",
  full: "9999px",
}
radii.element = radii[2]

const borders = [0, "1px solid", "2px solid", "4px solid", "8px solid"]

const shadows = [
  "none",
  "0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24)",
  "0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12)",
  "0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.10)",
  "0 15px 25px hsla(0, 0%, 0%, 0.15), 0 5px 10px hsla(0, 0%, 0%, 0.05)",
  "0 20px 40px hsla(0, 0%, 0%, 0.2)",
]

// -----------------
// Global CSS Styles
// -----------------
export const GlobalStyles = createGlobalStyle`
  /**
  * 1. Correct the line height in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in iOS.
  */
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
    font-family: ${fonts.sans};
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  *, *:before, *:after {
    /* When width or height are set, include margin, padding, and border in calculation */
    box-sizing: border-box;
  }
`

const theme = {
  colors,
  breakpoints,
  space,
  fontSizes,
  fonts,
  lineHeights,
  letterSpacings,
  radii,
  shadows,
  borders,
}
export default theme

import {
  space as spaceFn,
  color,
  display,
  width,
  height,
  minWidth,
  maxWidth,
  flex,
  order,
  alignSelf,
  justifySelf,
  gridColumn,
  gridRow,
  gridArea,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
  compose,
} from "styled-system"

export const commonStyleProps = compose(
  spaceFn,
  color,
  display,
  width,
  height,
  minWidth,
  maxWidth,
  flex,
  order,
  alignSelf,
  justifySelf,
  gridColumn,
  gridRow,
  gridArea
)
export const commonTypographyProps = compose(
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing
)
