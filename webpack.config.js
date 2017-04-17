var webpack = require('webpack');
var merge=require('webpack-merge')
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件
var baseWebpackConfig=require('./webpack.base.config')
module.exports =merge(baseWebpackConfig,{
    // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./", //最好写上，否则报错，难道这里是一个坑？
        port: 8081
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义生产环境
            }
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8081' })
    ]
})

