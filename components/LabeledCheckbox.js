import React from "react"
import PropTypes from "prop-types"
import Label from "./Label"
import Checkbox from "./Checkbox"

const LabeledCheckbox = ({ label, labelProps, ...props }) => (
  <Label {...labelProps}>
    <Checkbox {...props} /> {label}
  </Label>
)

LabeledCheckbox.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** Props in this object are passed to <Label> */
  labelProps: PropTypes.object,
  /** All other props are passed to <Checkbox> */
  "...props": PropTypes.any,
}
export default LabeledCheckbox
