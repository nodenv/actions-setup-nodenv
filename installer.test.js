/* global jest, describe, it, beforeAll, expect */

jest.mock("@actions/core")

const io = require("@actions/io")
const process = require("process")
const path = require("path")
const existsSync = require("fs").existsSync

process.env.RUNNER_TOOL_CACHE = path.join(__dirname, "../tmp/runner_tools")
process.env.RUNNER_TEMP = path.join(__dirname, "../tmp/runner_tmpdir")

const installNodenv = require("./installer").installNodenv

describe("installer tests", () => {
  beforeAll(async () => {
    await io.rmRF(process.env.RUNNER_TOOL_CACHE)
    await io.rmRF(process.env.RUNNER_TEMP)
  }, 100000)

  it("Acquires requested version of nodenv", async () => {
    const nodenvDir = await installNodenv("1.3.1")

    expect(existsSync(`${nodenvDir}.complete`)).toBe(true)
    expect(existsSync(path.join(nodenvDir, "bin/nodenv"))).toBe(true)
  }, 100000)

  it("Throws on unreleased version of nodenv", async () => {
    return expect(installNodenv("0.0.0")).rejects.toThrow("404")
  }, 100000)
})
