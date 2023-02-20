# setup-nodenv [![monorepo](https://img.shields.io/badge/---?style=social&logo=github&label=monorepo)](https://github.com/nodenv/actions)

[![Latest Release](https://img.shields.io/github/v/release/nodenv/actions-setup-nodenv?logo=github&sort=semver)](https://github.com/nodenv/actions-setup-nodenv/releases/latest)
[![Test](https://img.shields.io/github/actions/workflow/status/nodenv/actions/test.yml?branch=main&label=tests&logo=github)](https://github.com/nodenv/actions/actions/workflows/test.yml)
[![Examples](https://img.shields.io/github/actions/workflow/status/nodenv/actions/examples.yml?branch=main&color=orange&label=examples&logo=github)](https://github.com/nodenv/actions/actions/workflows/examples.yml)

## Usage

This action installs nodenv and adds it to PATH such that it is available in subsequent steps.

```yml
steps:
  - uses: nodenv/actions/setup-nodenv@v3
  - run: nodenv version # nodenv is in PATH!
```

## Special Note

This action is maintained within the [nodenv/actions monorepo](https://github.com/nodenv/actions),
but released through its [own repository](https://github.com/nodenv/actions-setup-nodenv)
(in order to be listed in the GitHub Marketplace).
You may reference either one in your workflows:

```yml
# pulls from the monorepo
- uses: nodenv/actions/setup-nodenv@v3

# pulls from the release repo
- uses: nodenv/actions-setup-nodenv@v3
```

**Issues and Pull Requests should be opened in the [monorepo](https://github.com/nodenv/actions), please!**
