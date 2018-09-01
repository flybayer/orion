import system from "system-components"

const Radio = system(
  {
    is: "input",
    type: "radio",
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

Radio.displayName = "Radio"
export default Radio
