// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: './src/vendor.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({template: './src/index.html'})
    // ]
};