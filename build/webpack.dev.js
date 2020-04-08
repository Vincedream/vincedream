const path = require('path')
const webpack = require('webpack');
const commonConf = require('./webpack.common.js')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = smart(commonConf, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            
        ]
    },
    plugins: [

    ],
    devServer: {
        port: 8080,
        progress: true,  // 显示打包的进度条
        contentBase: distPath,  // 根目录
        open: true,  // 自动打开浏览器
        compress: true,  // 启动 gzip 压缩
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3000',
        }
    }
})