import * as React from "react"
import { Toggle } from "react-powerplug"

import { Button as BaseButton } from "./Button"

export const ButtonSwap = ({ as: Button = BaseButton, onClick, swap, children, ...props }) => (
  <Toggle>
    {({ toggle, on }: any) => {
      const hasSwap = Boolean(swap)
      const handleClick = (ev: any) => {
        hasSwap && toggle()
        onClick && onClick(ev)
        hasSwap && setTimeout(toggle, 500)
      }

      return (
        <Button onClick={handleClick} {...props}>
          {on ? swap : children}
        </Button>
      )
    }}
  </Toggle>
)
