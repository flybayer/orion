import system from "system-components"
import Text from "./Text"

const LargeText = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: Text,
    fontSize: 3,
  }
)

LargeText.displayName = "LargeText"
export default LargeText
