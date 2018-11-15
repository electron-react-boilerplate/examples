erb-node-opencv-example
=======================

An experiment to get node-opencv working with [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate).

Currently it doesn't work because the abi doesn't resolve correctly. This is most likely a node-pre-gyp issue. Node is trying to resolve: `app/node_modules/opencv/build/opencv/v6.0.0/Release/node-v54-darwin-x64/opencv.node'` when it should be resolving `app/node_modules/opencv/build/opencv/v6.0.0/Release/electron-v1.7-darwin-x64/opencv.node'`.

#### Installation
```bash
git clone https://github.com/amilajack/erb-node-opencv-example.git
cd erb-node-opencv-example
yarn
cd app
yarn
```

### Note
To see [this commit](https://github.com/amilajack/erb-node-opencv-example/commit/1e49e801bb4602a79705a8c4c29d0a11c3486de8) for all the notable changes.
