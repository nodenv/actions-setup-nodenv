const core = require("@actions/core")
const { installNodenv } = require("./installer")

function run() {
  return Promise.resolve().then(() =>
    installNodenv(core.getInput("nodenv-version"))
  )
}

module.exports = run()
module.exports.catch(core.setFailed)
