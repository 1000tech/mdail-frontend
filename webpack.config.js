const
    webpack = require('webpack'),
    path = require('path'),
    { VueLoaderPlugin } = require('vue-loader'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    IconFontPlugin = require('icon-font-loader').Plugin;

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, './src/main.js'),
    ],
    output: {
        publicPath: '/',
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        watchOptions: {
            poll: true
        }
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '#': path.resolve(__dirname, './src/pages'),
            '@': path.resolve(__dirname, './src/partials'),
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
                    'icon-font-loader'
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'icon-font-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        },
                                    ],
                                ],
                            },
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            indentedSyntax: true
                        }
                    },
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
        new IconFontPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    import: [
                        path.resolve(__dirname, './src/styles/vars.styl'),
                        path.resolve(__dirname, './src/styles/func.styl')
                    ]
                }
            }
        })
    ]
};