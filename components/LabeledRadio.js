import React from "react"
import PropTypes from "prop-types"
import Label from "./Label"
import Radio from "./Radio"

const LabeledRadio = ({ label, labelProps, ...props }) => (
  <Label {...labelProps}>
    <Radio {...props} /> {label}
  </Label>
)

LabeledRadio.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** Props in this object are passed to <Label> */
  labelProps: PropTypes.object,
  /** All other props are passed to <Radio> */
  "...props": PropTypes.any,
}
export default LabeledRadio
