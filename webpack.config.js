const path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.resolve(__dirname, './index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: path.resolve(__dirname, './app/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: path.resolve(__dirname, './build')
    },
    plugins: [HTMLWebpackPluginConfig]
};