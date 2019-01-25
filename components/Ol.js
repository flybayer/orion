import styled from "styled-components"
import Text from "./Text"

let Ol = styled(Text.withComponent("ol"))``

Ol.defaultProps = {
  ...Text.defaultProps,
  pl: 5,
}
Ol.displayName = "Ol"
export default Ol
