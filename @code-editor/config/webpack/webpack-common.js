const webpack = require("webpack"),
    path = require("path"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

// Constants
const BUILD_DIR = path.join(__dirname, "../../build"),
    PUBLIC_DIR = path.join(__dirname, "../../public"),
    NODE_MODULES_DIR = path.join(__dirname, "../../node_modules");

// Shared between prod and dev
module.exports = {

    entry: "./public/main.ts",

    output: {
        // Since webpack-dev-middleware handles the files in memory, path property is used only in production.
        path: BUILD_DIR,
        publicPath: "/",
        filename: "bundle.js"
    },

    resolve: {
        extensions: ["*", ".ts", ".js"]
    },

    module: {

        loaders: [{
                test: /\.ts?$/,
                loader: "awesome-typescript-loader",
                include: PUBLIC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
        ]

    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    // Base plugins
    plugins: [

        new CopyWebpackPlugin([
            {
                from: `public/shared/images`,
                to: 'images'
            },
            // {
            //     from: NODE_MODULES_DIR + `/react/dist/react.min.js`,
            //     to: 'vendors/react.min.js'
            // },
        ]),

        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),

        // Load bundle.js after libs are loaded
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