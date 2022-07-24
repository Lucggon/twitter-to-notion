const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
    entry: {
        // Each entry in here would declare a file that needs to be transpiled
        // and included in the extension source.
        // For example, you could add a background script like:

        popup: 'popup.js',
        'page-eater':'page-eater.js'
      },
      output: {
        // This copies each source entry into the extension dist folder named
        // after its entry config key.
        path: path.join(__dirname, 'extension'),
        filename: '[name].js',
      },
      module: {
        rules: [{
          exclude: /node_modules/,
          test: /\.js$/,
          use: [
            // This transpiles all code (except for third party modules) using Babel.
            {
              // Babel options are in .babelrc
              loader: 'babel-loader',
              options:{
                presets:['@babel/preset-env', '@babel/preset-react']
              }
            }
          ]
        }]
      },
      resolve: {
        // This allows you to import modules just like you would in a NodeJS app.
        extensions: ['.js', '.jsx'],
        modules: [
          path.join(__dirname, 'src'),
          'node_modules',
        ],
      },
      plugins: [
        // Since some NodeJS modules expect to be running in Node, it is helpful
        // to set this environment var to avoid reference errors.
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
      ],
      // This will expose source map files so that errors will point to your
      // original source files instead of the transpiled files.
      
}