import system from "system-components"
import Text from "./Text"

const SmallText = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: Text.withComponent("small"),
    fontSize: 0,
    letterSpacing: "0.03ex",
  }
)

SmallText.displayName = "SmallText"
export default SmallText
