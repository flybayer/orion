import React from "react"
import { ThemeProvider } from "styled-components"
import theme, { GlobalStyles } from "./theme"

// This must wrap any portion of your application where you want to use styled-components
export default props => (
  <React.Fragment>
    <ThemeProvider theme={theme} {...props} />
    <GlobalStyles />
  </React.Fragment>
)
