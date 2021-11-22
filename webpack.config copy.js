const webpack = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const sass = require('sass')

require('dotenv').config()

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'script.[fullhash].js',
        clean: true
    },
    performance: {
        hints: false
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src/partials'),
            '#': path.resolve(__dirname, './src/pages'),
            '%': path.resolve(__dirname, './src/services')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass,
                            additionalData: "@import './src/styles/vars.sass'",
                            sassOptions: {
                                indentedSyntax: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            APP_PATH: JSON.stringify(process.env.APP_PATH),
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            publicPath: '/'
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: 'src/assets/img', to: 'img' 
                }
            ]
        })
    ]
}