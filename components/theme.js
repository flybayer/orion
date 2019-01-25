import { createGlobalStyle } from "styled-components"

const baseColors = {
  black: "#22292f",
  white: "#ffffff",
  gray: {
    darkest: "#3d4852",
    darker: "#606f7b",
    dark: "#8795a1",
    base: "#b8c2cc",
    light: "#dae1e7",
    lighter: "#f1f5f8",
    lightest: "#f8fafc",
  },
  red: {
    darkest: "#3b0d0c",
    darker: "#621b18",
    dark: "#cc1f1a",
    base: "#e3342f",
    light: "#ef5753",
    lighter: "#f9acaa",
    lightest: "#fcebea",
  },
  orange: {
    darkest: "#462a16",
    darker: "#613b1f",
    dark: "#de751f",
    base: "#f6993f",
    light: "#faad63",
    lighter: "#fcd9b6",
    lightest: "#fff5eb",
  },
  yellow: {
    darkest: "#453411",
    darker: "#684f1d",
    dark: "#f2d024",
    base: "#ffed4a",
    light: "#fff382",
    lighter: "#fff9c2",
    lightest: "#fcfbeb",
  },
  green: {
    darkest: "#0f2f21",
    darker: "#1a4731",
    dark: "#1f9d55",
    base: "#38c172",
    light: "#51d88a",
    lighter: "#a2f5bf",
    lightest: "#e3fcec",
  },
  teal: {
    darkest: "#0d3331",
    darker: "#20504f",
    dark: "#38a89d",
    base: "#4dc0b5",
    light: "#64d5ca",
    lighter: "#a0f0ed",
    lightest: "#e8fffe",
  },
  blue: {
    darkest: "#12283a",
    darker: "#1c3d5a",
    dark: "#2779bd",
    base: "#3490dc",
    light: "#6cb2eb",
    lighter: "#bcdefa",
    lightest: "#eff8ff",
  },
  indigo: {
    darkest: "#191e38",
    darker: "#2f365f",
    dark: "#5661b3",
    base: "#6574cd",
    light: "#7886d7",
    lighter: "#b2b7ff",
    lightest: "#e6e8ff",
  },
  purple: {
    darkest: "#21183c",
    darker: "#382b5f",
    dark: "#794acf",
    base: "#9561e2",
    light: "#a779e9",
    lighter: "#d6bbfc",
    lightest: "#f3ebff",
  },
  pink: {
    darkest: "#451225",
    darker: "#6f213f",
    dark: "#eb5286",
    base: "#f66d9b",
    light: "#fa7ea8",
    lighter: "#ffbbca",
    lightest: "#ffebef",
  },
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
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx) {
    body {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
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
