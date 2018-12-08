import React from "react"
import PropTypes from "prop-types"
import Label from "./Label"
import Input from "./Input"

const LabeledInput = ({ label, labelProps = {}, ...props }) => (
  <Label flexDirection="column" {...labelProps}>
    {label}
    <Input mt={2} {...props} />
  </Label>
)

LabeledInput.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** Props in this object are passed to <Label> */
  labelProps: PropTypes.object,
  /** All other props are passed to <Input> */
  "...props": PropTypes.any,
}
export default LabeledInput
