import React from "react"
import Label from "./Label"
import Input from "./Input"

export default ({ label, labelProps, ...props }) => (
  <Label flexDirection="column" {...labelProps}>
    {label}
    <Input mt={1} {...props} />
  </Label>
)
