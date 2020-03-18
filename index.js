const core = require('@actions/core')
const { installNodenv } = require('../src/installer')

function run () {
  return Promise.resolve()
    .then(() => installNodenv(core.getInput('nodenv-version')))
    .catch(err => core.setFailed(err.message))
}

module.exports = run()
