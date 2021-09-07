const path = require('path');

module.exports = {
    mode: 'development',
    // code path to generate an output file
    entry: './assets/js/index.js',
    // where the generated file will go
    output: {
        filename: 'webpackBundle.js',
        path: path.resolve(__dirname, 'assets', 'js')
    }
}