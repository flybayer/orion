import emoji from "remark-emoji"
import * as path from "path"

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    $components: path.resolve(__dirname, "components"),
  })

  config.module.rules = config.module.rules.concat({
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  })

  return config
}

export default {
  title: "✈️ Camber",
  repository: "https://github.com/flybayer/orion",
  theme: "docz/theme.js",
  mdPlugins: [emoji],
  modifyBundlerConfig,
  menu: [
    "Home",
    "Installation",
    "Box",
    "Grid",
    "Text",
    "Heading",
    "Ul",
    "Ol",
    { name: "Buttons", menu: ["Button", "MinimalButton", "OutlineButton", "ButtonBase"] },
    { name: "Inputs", menu: ["Input", "LabeledInput", "MinimalInput", "InputBase"] },
    "Label",
    "Textarea",
    { name: "Radios", menu: ["Radio", "LabeledRadio"] },
    { name: "Checkboxes", menu: ["Checkbox", "LabeledCheckbox"] },
  ],
}
