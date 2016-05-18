var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './app/js/src/app.js'
        ]
    },
    output: {
        path: 'app/js/bundled/',
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/bundled/'
    },
    module: {
        loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }]
    },
    resolve: {
        alias: {
            react: 'react'
        },
        // so we can import things other than .js files with the extension
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: [
            'node_modules'
        ]
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Access-Control-Allow-Credentials': true
        }
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
