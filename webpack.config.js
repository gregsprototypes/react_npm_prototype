var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/test_export.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'test_export.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}