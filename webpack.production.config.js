var webpack = require('webpack');
var merge=require('webpack-merge')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var baseWebpackConfig=require('./webpack.base.config')
module.exports = merge(baseWebpackConfig,{
    plugins: [
         new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production') //定义生产环境
                }
        }),
        new HtmlWebpackPlugin({
           filename: '../index.html', //生成的html存放路径，相对于 path
           template: './template/index.html', //html模板路径
           hash: true,
           inject:true
        }),
        // 压缩配置
        new uglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,  // 移除注释
        })
    ]
})
