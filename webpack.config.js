const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/public/index.js'),
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

    resolve: {
        modules: ['node_modules']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
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