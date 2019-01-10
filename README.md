# Electron React Boilerplate Examples

[![Build Status](https://travis-ci.com/electron-react-boilerplate/examples.svg?branch=master)](https://travis-ci.com/electron-react-boilerplate/examples)

## Table of Contents

|  | Example | Descrption |
| --- | --- | --- |
| 1.|  [sqlite](https://github.com/electron-react-boilerplate/examples/tree/master/examples/sqlite) | Bundling and using SQLite with ERB |
| 2.|  [typescript](https://github.com/electron-react-boilerplate/examples/tree/master/examples/typescript) | Type checking with TS with React support |

## Notable Forks

Mobx
* [electron-react-mobx-boilerplate](https://github.com/gzgogo/electron-react-mobx-boilerplate)

CSS
* [Ant Design example](https://github.com/amilajack/erb-ant-design-example)
* [Bootstrap example](https://github.com/amilajack/erb-bootstrap-example)

Native Modules Example
* [sqlite example](https://github.com/amilajack/erb-sqlite-example)
* [serialport example](https://github.com/amilajack/erb-serialport-example)

Miscellaneous Example
* [express example](https://github.com/amilajack/erb-express-example)
* [monorepo example](https://github.com/amilajack/erb-monorepo-example)
* [package in yarn workspaces example](https://github.com/vikr01/erb-with-workspaces-example)
* [html video example](https://github.com/amilajack/erb-video-example)
* [importing audio files example](https://github.com/amilajack/erb-audio-example)
* [reading local files at runtime in dev and prod env](https://github.com/amilajack/erb-local-fs-read-example)


## Setup

```bash
git clone https://github.com/electron-react-boilerplate/examples
cd examples

# If you don't have lerna, run `npm i -g lerna@latest` or `yarn global add lerna@latest`
lerna bootstrap

# cd to an example you'd like to run
cd sqlite
# Development
yarn dev
# Package for production
yarn package
```
