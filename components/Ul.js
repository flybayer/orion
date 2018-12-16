import styled from "styled-components"
import Text from "./Text"

let Ul = styled(Text.withComponent("ul"))`
  list-style: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2211%22%20height%3D%2211%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3AcurrentColor%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22a%22%20d%3D%22M23.6%2C11.289l-9.793-9.7a2.607%2C2.607%2C0%2C0%2C0-3.679.075%2C2.638%2C2.638%2C0%2C0%2C0-.068%2C3.689l3.871%2C3.714a.25.25%2C0%2C0%2C1-.173.43H2.135A2.28%2C2.28%2C0%2C0%2C0%2C.1%2C12c0%2C.815.448%2C2.51%2C2%2C2.51H13.779a.25.25%2C0%2C0%2C1%2C.177.427l-3.731%2C3.733a2.66%2C2.66%2C0%2C0%2C0%2C3.758%2C3.754l9.625-9.72A1%2C1%2C0%2C0%2C0%2C23.6%2C11.289Z%22%2F%3E%3C%2Fsvg%3E");
`

Ul.defaultProps = {
  ...Text.defaultProps,
  pl: 5,
}
Ul.displayName = "Ul"
export default Ul
