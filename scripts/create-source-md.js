const fs = require("fs-extra")
const path = require("path")
const chokidar = require("chokidar")

const DIR = "components"
const TMP_DIR = "components/tmp-source"

const createSourceMd = filePath => {
  const newName = path.basename(filePath, ".js") + ".md"
  const newPath = `${TMP_DIR}/${newName}`

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err
    // Wrap file contents in markdown code block
    const newData = "```\n" + data + "```"
    fs.writeFile(newPath, newData)
  })
}

const persistent = process.argv[2] === "watch" ? true : false

const watcher = chokidar
  .watch(DIR + "/*.js", { persistent })
  .on("add", createSourceMd)
  .on("change", createSourceMd)
