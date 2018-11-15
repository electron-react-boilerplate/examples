erb-sqlite-example
==================

[![Build Status](https://travis-ci.org/amilajack/erb-sqlite-example.svg?branch=master&maxAge=2592)](https://travis-ci.org/amilajack/erb-sqlite-example)

**An example of erb with native dependencies (sqlite3 in this case)**

## Setup
⚠️ These instructions assume that you have yarn. If you don't, make sure to install it: `npm i -g yarn`

```bash
git clone https://github.com/amilajack/erb-sqlite-example.git
cd erb-sqlite-example && yarn
yarn dev
```

## How it works
`sqlite3` is a native dependency that needs to be compiled before it is used (therefore it is consiered 'native dependency'). `sqlite3` and any other depencencies in `./app/package.json` are imported as an [externals](https://webpack.js.org/configuration/externals/), which means that webpack doesn't process them. The dependency will be imported with normal `require()` calls.

Some native dependencies have issues with how webpack bundles code. One solution to these kinds of issues is to add those native dependencies to your `./app/package.json`. These dependencies are automatically rebuilt against electron's node version after installing (see the postinstall script in `./app/package.json`). [electron-builder](https://github.com/electron-userland/electron-builder) will also rebuild dependencies just before packaging your app.

You **must** install the dependencies as `dependencies` **and not** `devDepencencies`. Make sure to install like so for npm: `npm install --save my-cool-depencency` and like so for yarn: `yarn add my-cool-depencency -S`.

## Notes
**These changes that were made to ERB:**
```bash
cd app
yarn add sqlite
```
