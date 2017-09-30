var webpack = require("webpack"),
    common = require("./webpack-common");

// Development
module.exports = Object.assign(common, {

    // Enable sourcemaps for debugging webpack's output.
    // For use in development. Inlined source maps should not be used in production.
    // Adding inline source map to generated bundles is the easiest way to help debugging without bringing extra files.
    devtool: "inline-source-map",

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },

    // Development plugins
    // Enable hot reload
    plugins: [
        ...common.plugins,
    ]
});