# Contributing to Zalando Wholesale Styleguide

Thanks for being interested in contributing! 

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

### Submitting issues

- Use a clear and descriptive title.
- Include as much information as possible: Steps to reproduce the issue, error message, Node.js version, operating system, etc.
- The more time you put into an issue, the more we will.
- (optional) [The best issue report is a failing test proving it.](https://twitter.com/sindresorhus/status/579306280495357953)

### Contributing a pull request

- Submit a comment to the relevant issue or create a new issue describing your proposed change.
- Do a fork, develop and test your code changes.
- We are creating a changelog for our releases and have a clear layout for commit / pr messages [see below](#commit-message-convention)
- Include documentation. We are auto-generating our components API based on jsDocs so please follow the instructions at [How to document components
](https://github.com/wholesale-design-system/components/wiki/How-to-document-components)
- Submit a pull request

You'll get feedback about your pull request as soon as possible.

### Commit Message Convention

As we are generating changelogs based on successfully merged pull-requests we have to enforce a specific layout for git commit messages. 

_patches:_

```sh
git commit -a -m "fix(header): Fixed broken styling"
```

_features:_

```sh
git commit -a -m "feat(dropdown): Added icons to dropdown items"
```

_other changes:_

You decide, e.g., docs, chore, etc.

```sh
git commit -a -m "docs: fixed up the docs a bit"
```