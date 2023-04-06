const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/public/index.html'),
            filename: 'index.html',
        }),
    ],

    experiments: {
        topLevelAwait: true
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ]
    },

    devServer: {
        port: 9000,
        open: {
            app: {
                name: 'google-chrome',
            },
        },
    },

    mode: 'development',

}