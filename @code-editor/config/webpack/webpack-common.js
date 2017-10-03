const webpack = require('webpack'),
    path = require('path'),
    ts = require('typescript'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

// Constants
const BUILD_DIR = path.join(__dirname, '../../build'),
    PUBLIC_DIR = path.join(__dirname, '../../public'),
    NODE_MODULES_DIR = path.join(__dirname, '../../node_modules');

// Shared between prod and dev
module.exports = {

    entry: './public/main.ts',

    output: {
        // Since webpack-dev-middleware handles the files in memory, path property is used only in production.
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'visual-school.js'
    },

    resolve: {
        extensions: ['*', '.ts', '.js']
    },

    module: {

        loaders: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader',
                include: PUBLIC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'file-loader',
                query: {
                    name: 'media/[name].[ext]'
                }
            },
            // {
            //     test: /\.jpg$/,
            //     loader: 'file-loader',
            //     query: {
            //         name: 'img/[name].[ext]'
            //     }
            // },
            {
                test: /\.bling\.js$/, // Emulate jQuery selector (global var)
                use: [ 'script-loader' ]
            }
        ]

    },

    // Base plugins
    plugins: [

        new CopyWebpackPlugin([
            {
                from: `public/shared/images`,
                to: 'images'
            },
            {
                from: `media`,
                to: 'media'
            },
            {
                from: `code-samples`,
                to: 'code-samples'
            },
            // {
            //     from: NODE_MODULES_DIR + `/react/dist/react.min.js`,
            //     to: 'vendors/react.min.js'
            // },
        ]),

        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: false 
        }),

        // Load visual-school.js after libs are loaded
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],

    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    }
};