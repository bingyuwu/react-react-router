var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件

module.exports = {
   // 配置入口
    entry: {
        index: './src/main.js',
        //vendors:['react','react-dom','react-router']  //第三方库和框架
    },
    output: {
        path: 'dist/static',   //编译好的文件，在服务器的路径,域名会自动添加到前面
        publicPath: '/static/',//编译到当前目录
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        loaders: [
            {test: /\.css$/, loader:'style-loader!css-loader'},
            {test: /\.scss$/,loader: ExtractTextPlugin.extract('style', ['css', 'sass'])},
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            {test: /\.(png|jpg)$/,loader: 'url?limit=8192&name=images/[name].[hash:7].[ext]'},
            {test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.scss'],
        alias:{
            'components': path.resolve(__dirname, './src/components'),
            'styles':path.resolve(__dirname,'./src/styles'),
            'src':path.resolve(__dirname,'./src')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),//抽取公共代码
        new ExtractTextPlugin('[name].css'),//抽取独立的css
        new webpack.HotModuleReplacementPlugin(),//热更新
    ]

}
