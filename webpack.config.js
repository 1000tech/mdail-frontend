const
    webpack = require('webpack'),
    path = require('path'),
    { VueLoaderPlugin } = require('vue-loader'),
    // IconFontPlugin = require('icon-font-loader').Plugin,
    HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'script.[hash].js',
        publicPath: process.env.APP_PATH
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            '#': path.resolve(__dirname, './src/pages'),
            '@': path.resolve(__dirname, './src/partials')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                    {
                        loader: 'webpack-atomizer-loader',
                        options: {
                            configPath: path.resolve(__dirname, './acssConf.js')
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 'icon-font-loader',
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 'icon-font-loader',
                    'postcss-loader',
                    {
                        loader: 'stylus-loader',
                        options: {
                            indentedSyntax: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=src/assets/fonts/[name].[ext]'
                    }
                ]
            }
        ]
    },
    plugins: [
        // new IconFontPlugin(),
        new webpack.DefinePlugin({
            APP_API_URL: JSON.stringify(process.env.APP_API_URL),
            APP_PATH: JSON.stringify(process.env.APP_PATH)
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
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