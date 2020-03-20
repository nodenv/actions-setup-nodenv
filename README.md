# setup-nodenv

## Usage

This action installs nodenv and adds it to PATH such that it is available in subsequent steps.

```yml
steps:
  - uses: nodenv/actions/setup-nodenv
```

## Special Note

This action is maintained within the [nodenv/actions monorepo](https://github.com/nodenv/actions),
but released through its [own repository](https://github.com/nodenv/actions-setup-nodenv)
(in order to be listed in the GitHub Marketplace).
You may reference either one in your workflows:

```yml
# pulls from the monorepo
- uses: nodenv/actions/setup-nodenv

# pulls from the release repo
- uses: nodenv/actions-setup-nodenv
```
