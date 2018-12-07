import styled from "styled-components"
import MinimalButton from "./MinimalButton"

let OutlineButton = styled(MinimalButton)``

OutlineButton.defaultProps = {
  ...MinimalButton.defaultProps,
  px: 2,
  py: 1,
  border: "1px solid",
}
OutlineButton.displayName = "OutlineButton"
export default OutlineButton
