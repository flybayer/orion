import * as React from "react"
import { Component } from "react"
import { MenuItem } from "docz"
import ChevronDown from "react-feather/dist/icons/chevron-down"
import styled from "react-emotion"

import { MenuLink, getActiveFromClass } from "./MenuLink"
import { get } from "../../../utils/theme"

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
`

const List = styled("dl")`
  flex: 1;
  overflow-y: auto;
  visibility: ${p => (p.opened ? "visible" : "hidden")};
  max-height: ${p => (p.opened ? "auto" : "0px")};
`

const iconRotate = p => (p.opened ? "-180deg" : "0deg")

const Icon = styled("div")`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${iconRotate});
  transform-origin: 50% 50%;
  transition: transform 0.3s;

  & svg {
    stroke: ${get("colors.sidebarText")};
  }
`

export class Menu extends Component {
  state = {
    opened: false,
    hasActive: false,
  }

  constructor(props) {
    super(props)
    this.$els = []
  }

  componentDidMount() {
    this.checkActiveLink()
  }

  render() {
    const { item, sidebarToggle, collapseAll } = this.props

    const show = collapseAll || this.state.opened
    const hasChildren = !item.href && item.menu && item.menu.length > 0
    const hasToggle = !item.href && !item.route

    const handleToggle = ev => {
      ev.preventDefault()
      this.toggle()
    }

    return (
      <Wrapper>
        <MenuLink item={item} {...hasToggle && { onClick: handleToggle }}>
          {item.name}
          {hasChildren && (
            <Icon opened={show}>
              <ChevronDown size={15} />
            </Icon>
          )}
        </MenuLink>
        {hasChildren && (
          <List opened={show}>
            {item.menu &&
              item.menu.map(item => (
                <dt key={item.id}>
                  <MenuLink
                    item={item}
                    onClick={sidebarToggle}
                    innerRef={node => {
                      this.$els = this.$els.concat([node])
                    }}
                  >
                    {item.name}
                  </MenuLink>
                </dt>
              ))}
          </List>
        )}
      </Wrapper>
    )
  }

  toggle = () => {
    this.setState(state => ({ opened: !state.opened }))
  }

  checkActiveLink = () => {
    const hasActive = this.$els.some(el => getActiveFromClass(el))
    if (hasActive) this.setState({ hasActive, opened: true })
  }
}
