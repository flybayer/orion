import React from "react"
import Label from "./Label"
import Checkbox from "./Checkbox"

export default ({ label, labelProps, ...props }) => (
  <Label {...labelProps}>
    <Checkbox {...props} /> {label}
  </Label>
)
