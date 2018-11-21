/* eslint import/no-unresolved: off, import/no-self-import: off */
require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx']
});

module.exports = require('./webpack.config.renderer.dev.babel').default;
