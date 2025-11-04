// extra-webpack.config.js
const { merge } = require('webpack-merge');

module.exports = (config) =>
  merge(config, {
    experiments: { outputModule: true },
    output: {
      library: { type: 'module' }, // ESM
      // pas de filename fixe -> Angular servira 'main.js'
    },
    optimization: {
      runtimeChunk: false,
      splitChunks: false, // un seul bundle -> plus simple pour l'import map
    },
  });
