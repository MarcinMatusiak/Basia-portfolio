const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index',

    output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader"
            }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ]
};