import React from "react"
import Label from "./Label"
import Radio from "./Radio"

export default ({ label, labelProps, ...props }) => (
  <Label {...labelProps}>
    <Radio {...props} /> {label}
  </Label>
)
