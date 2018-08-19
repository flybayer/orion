import system from "system-components"

const Checkbox = system(
  {
    is: "input",
    type: "checkbox",
    m: 0,
    mr: 1,
    alignSelf: "center",
  },
  "space",
  "color",
  "flex",
  "alignSelf",
  "justifySelf"
)

Checkbox.displayName = "Checkbox"
export default Checkbox
