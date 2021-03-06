import * as React from "react"
import styled from "react-emotion"
import { Link as BaseLink } from "docz"

import { get } from "../../utils/theme"

export const LinkStyled = styled("a")`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${get("colors.link")};
  }

  &:hover {
    color: ${get("colors.link")};
  }
`

export const Link = ({ href, ...props }) => {
  const isInternal = href && href.startsWith("/")
  const Component = isInternal ? LinkStyled.withComponent(BaseLink) : LinkStyled

  return isInternal ? <Component {...props} to={href} /> : <Component {...props} href={href} />
}
