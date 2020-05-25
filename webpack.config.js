const path = require('path');
require('babel-polyfill');

module.exports = {
    entry: {
        app: './src/index.js',
        main: ['babel-polyfill', './engine/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/public'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }]
    },
    devServer: {
        overlay: true
    }
};