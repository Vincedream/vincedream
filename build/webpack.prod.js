const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConf = require('./webpack.common');
const { smart } = require('webpack-merge')
const { distPath } = require('./paths');

module.exports = smart(commonConf, {
    mode: 'production',
    output: {
        filename: 'bundle.[contentHash:8].js',
        path: distPath,
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
})