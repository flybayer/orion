import system from "system-components"
import Text from "./Text"

const Ol = system(
  // 1st arg is default props, rest are styled-component CSS strings or objects
  {
    is: Text.withComponent("ol"),
    pl: 4,
  }
)

Ol.displayName = "Ol"
export default Ol
