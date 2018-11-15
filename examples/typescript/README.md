erb-typescript-example
======================
A fork of [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) that exemplifies using typescript.

[![Build Status](https://travis-ci.org/amilajack/erb-typescript-example.svg?branch=master&maxAge=2592)](https://travis-ci.org/amilajack/erb-typescript-example)

## Roadmap
- [ ] Fix css module resolution
- [ ] Integrate babel and typescript
- [ ] Waiting on awesome-typescript-loader to throw warnings instead of errors
- [ ] ESLint integration?


## Setup
⚠️ These instructions assume that you have yarn. If you don't, make sure to install it: `npm i -g yarn`


```bash
git clone https://github.com/amilajack/erb-typescript-example.git
cd erb-typescript-example && yarn
cd app && yarn
cd ..
yarn dev

# Run typescript
yarn ts

# Run react tests
yarn test

# Run e2e tests
yarn test-e2e

# Run tslint
yarn lint
```
