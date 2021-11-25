const webpack = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

require('dotenv').config()

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'script.[fullhash].js',
        publicPath: process.env.APP_PATH,
        clean: true
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            '#': path.resolve(__dirname, './src/pages'),
            '@': path.resolve(__dirname, './src/partials'),
            '%': path.resolve(__dirname, './src/services'),
            '&': path.resolve(__dirname, './src/assets/icons')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            API: JSON.stringify(process.env.API),
            API_BOOKMARK: JSON.stringify(process.env.API_BOOKMARK),
            APP_PATH: JSON.stringify(process.env.APP_PATH)
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            publicPath: '/'
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: 'src/assets/img', to: 'img', 
                    from: 'src/assets/icons', to: 'icons'
                }
            ]
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    import: [
                        path.resolve(__dirname, './src/styles/vars.styl'),
                        path.resolve(__dirname, './src/styles/mixin.styl')
                    ]
                }
            }
        })
    ]
}