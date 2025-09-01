const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require("./webpack.common")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            filename: "remoteEntry.js",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: "^17.0.2"
                },
                "react-dom": {
                    singleton: true,
                    eager: true,
                    requiredVersion: "^17.0.2"
                }
            }
        }),
    ]
}
module.exports = merge(commonConfig, devConfig)