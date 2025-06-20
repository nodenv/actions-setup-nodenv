const path = require("path")
const core = require("@actions/core")
const tools = require("@actions/tool-cache")

const TOOL_NAME = "nodenv"

module.exports = {
  installNodenv: async function (version) {
    const toolPath = tools.find(TOOL_NAME, version) || downloadNodenv(version)

    // prepend bin directory to PATH for future tasks
    core.addPath(path.join(await toolPath, "bin"))

    return toolPath
  }
}

async function downloadNodenv(version) {
  return Promise.resolve(
    `https://github.com/nodenv/nodenv/archive/v${version}.tar.gz`
  )
    .then((url) => tools.downloadTool(url))
    .then((tarballPath) => tools.extractTar(tarballPath))
    .then((extractedPath) => `${extractedPath}/nodenv-${version}`)
    .then((nodenvPath) => tools.cacheDir(nodenvPath, TOOL_NAME, version))
}
