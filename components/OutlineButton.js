import system from "system-components"
import MinimalButton from "./MinimalButton"

const OutlineButton = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: MinimalButton,
    px: 2,
    py: 1,
    border: "1px solid",
  }
)

OutlineButton.displayName = "OutlineButton"
export default OutlineButton
