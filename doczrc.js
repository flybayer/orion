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
  title: "🌃 Orion",
  repository: "https://github.com/flybayer/orion",
  theme: "docz/theme.js",
  mdPlugins: [emoji],
  modifyBundlerConfig,
}
