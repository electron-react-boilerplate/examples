# Electron React Boilerplate Examples

## Table of Contents

|  | Example | Descrption |
| --- | --- | --- |
| 1.|  [sqlite](https://github.com/electron-react-boilerplate/examples/tree/master/examples/sqlite) | Bundling and using SQLite with ERB |

## Notable Forks

Second Renderer Window
* [erb-second-renderer-window-example](https://github.com/amilajack/erb-second-renderer-window-example)

Mobx
* [electron-react-mobx-boilerplate](https://github.com/gzgogo/electron-react-mobx-boilerplate)

CSS and Styling
* [Tailwind example](https://github.com/amilajack/erb-tailwind-example)
* [Ant Design example](https://github.com/amilajack/erb-ant-design-example)
* [Bootstrap example](https://github.com/amilajack/erb-bootstrap-example)

Native Modules Example
* [sqlite3 example](https://github.com/amilajack/erb-sqlite-example)
* [better-sqlite3 example](https://github.com/amilajack/erb-better-sqlite3-example)
* [serialport example](https://github.com/amilajack/erb-serialport-example)

Miscellaneous Example
* [express example](https://github.com/amilajack/erb-express-example)
* [monorepo example](https://github.com/amilajack/erb-monorepo-example)
* [package in yarn workspaces example](https://github.com/vikr01/erb-with-workspaces-example)
* [html video example](https://github.com/amilajack/erb-video-example)
* [importing audio files example](https://github.com/amilajack/erb-audio-example)
* [reading local files at runtime in dev and prod env](https://github.com/amilajack/erb-local-fs-read-example)
* [menubar application example](https://github.com/3on/electron-react-boilerplate-menubar)

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
