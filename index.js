const core = require('@actions/core')
const { installNodenv } = require('../src/installer')

async function run () {
  return Promise.resolve()
    .then(() => installNodenv(core.getInput('nodenv-version')))
    .catch(error => core.setFailed(error.message))
}

run()
