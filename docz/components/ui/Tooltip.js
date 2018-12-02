import * as React from "react"
import { ThemeConfig } from "docz"
import BaseTooltip from "rc-tooltip"
import styled, { css } from "react-emotion"

import { get } from "../../utils/theme"

const overlayClass = colors => css`
  .rc-tooltip-inner {
    background: ${colors.tooltipBg};
    color: ${colors.tooltipColor};
  }

  .rc-tooltip-arrow {
    border-top-color: ${colors.tooltipBg};
  }
`

const Link = styled("a")`
  text-decoration: none;
  color: ${get("colors.primary")};
`

export const Tooltip = ({ text, children }) => (
  <ThemeConfig>
    {config => (
      <BaseTooltip
        placement="top"
        trigger={["hover"]}
        overlay={text}
        overlayClassName={overlayClass(config.themeConfig.colors)}
      >
        <Link href="#" onClick={ev => ev.preventDefault()}>
          {children}
        </Link>
      </BaseTooltip>
    )}
  </ThemeConfig>
)
