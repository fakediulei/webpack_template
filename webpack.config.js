var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	/*entry:'./src/entry/entry.js',*//*单入口*/
	entry:{/*多入口*/
		"a":"./src/entry/a.js",
		"b":"./src/entry/b.js"
	},
	output:{
		path:__dirname+'/dist',
		/*filename:'bundle.js'*//*单入口文件输出格式*/
		filename:"[name].bundle.js"
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"style!css"},
			{test:/\.scss$/,loader:ExtractTextPlugin.extract(["css","sass"])},	
			{test:/\.less$/,loader:ExtractTextPlugin.extract(["css","less"])},			
			{test:/\.(png|jpg)$/,loader:'url?limit=10000'}
		]
	},
	resolve:{
		alias:{//别名,可以在其他地方直接应用jquery代替写路径
			jquery:path.join(__dirname,'./src/scripts/jquery.min.js'),
			"style-less":path.join(__dirname,'./src/styles/less')
		}
	},
	plugins:[
		new webpack.BannerPlugin('This file is created by jack!'),
		new ExtractTextPlugin('[name].css')/*把编译好的css放在main.css(单入口是为main,多入口时为entry中的键值)中*/
	]
	
};
