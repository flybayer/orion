import React from "react"
import { ThemeProvider } from "styled-components"
import theme, { GlobalStyles } from "./theme"

export default props => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme} {...props} />
  </>
)
