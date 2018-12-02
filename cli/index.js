const usage = `Usage: orion-install [options] <component>

  <component> can be any component name found in https://github.com/flybayer/orion/tree/master/components

	The component name is not case-sensitive unless it's two words.
		Good: 'button' or 'Button'
		Good: 'buttonBase' or 'ButtonBase'
		Bad: 'buttonbase'

Options:
  -h, --help            Print usage information
  -v, --version         Print version
`

// Main Program
;(async () => {
  let args
  try {
    args = require("arg")({
      "--help": Boolean,
      "-h": "--help",
      "--version": Boolean,
      "-v": "--version",
    })
  } catch (err) {
    if (err.message.indexOf("Unknown or unexpected option") === -1) throw err
    console.error(err.message + `\n\n${usage}`)
    process.exit(1)
  }

  if (args["--version"]) {
    console.log(require("../package.json").version)
    return
  }

  if (args["--help"]) {
    console.log(usage)
    return
  }

  if (args._.length === 0) {
    console.error(`Error: No component specified\n\n${usage}`)
    process.exit(1)
  }

  for (let rawName of args._) {
    const normalizedName = rawName.charAt(0).toUpperCase() + rawName.substring(1)
    const fileName = normalizedName.match(/\.js$/) ? normalizedName : normalizedName + ".js"

    //TODO check to make sure this file name doesn't already exist

    console.log(`Downloading ${fileName}`)
    const fetch = require("@zeit/fetch")(require("node-fetch"))
    const res = await fetch(
      `https://raw.githubusercontent.com/flybayer/orion/master/components/${fileName}`
    )
    const dest = require("fs").createWriteStream(`./${fileName}`)
    res.body.pipe(dest)
    console.log(`Saved ./${fileName}`)
  }

  // install code here
})()
