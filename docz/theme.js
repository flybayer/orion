import "../node_modules/rc-tooltip/assets/bootstrap.css"
import "./styles/global"

import * as React from "react"
import { theme as doczTheme, DocPreview, ThemeConfig } from "docz"
import { ThemeProvider as DoczThemeProvider } from "emotion-theming"
import webfont from "webfontloader"

import { config } from "./config"
import { mq } from "./styles/responsive"
import * as components from "./components/ui"
import * as modes from "./styles/modes"

import { ThemeProvider } from "styled-components"
import theme, { GlobalStyles } from "$components/theme"
import Heading from "$components/Heading"
import Text from "$components/Text"
import Ul from "$components/Ul"
import Ol from "$components/Ol"

const mergeTheme = config => old => ({
  ...old,
  docz: Object.assign({}, config.themeConfig, { mq }),
})

const Theme = () => (
  <ThemeProvider theme={theme}>
    <>
      <ThemeConfig>
        {config => (
          <DoczThemeProvider theme={mergeTheme(config)}>
            <DocPreview
              components={{
                page: components.Page,
                notFound: components.NotFound,
                render: components.Render,
                blockquote: components.Blockquote,
                h1: props => <Heading fontSize={6} fontWeight={500} mt={5} {...props} />,
                h2: props => <Heading as="h2" fontSize={5} mt={4} {...props} />,
                h3: props => <Heading as="h3" fontSize={4} fontWeight={400} {...props} />,
                h4: props => <Heading as="h4" fontSize={3} {...props} />,
                h5: props => <Heading as="h5" fontSize={3} {...props} />,
                h6: props => <Heading as="h6" fontSize={2} {...props} />,
                hr: components.Hr,
                ul: Ul,
                ol: Ol,
                p: props => <Text {...props} />,
                a: components.Link,
                inlineCode: components.InlineCode,
                loading: components.Loading,
                table: components.Table,
                pre: components.Pre,
                tooltip: components.Tooltip,
              }}
            />
          </DoczThemeProvider>
        )}
      </ThemeConfig>
      <GlobalStyles />
    </>
  </ThemeProvider>
)

webfont.load({
  google: {
    families: ["Source Code Pro"],
  },
})

const transform = ({ mode, codemirrorTheme, ...config }) => {
  const selectedMode = modes[mode]

  return {
    ...config,
    mode,
    codemirrorTheme: codemirrorTheme || `docz-${mode}`,
    colors: {
      ...selectedMode,
      ...config.colors,
    },
  }
}

export default doczTheme(config, transform)(Theme)
