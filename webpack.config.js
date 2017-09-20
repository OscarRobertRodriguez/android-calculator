
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js', 
		publicPath: 'dist/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/ 
			},
			{
				loader: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
				test: /\.css$/
			}


		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin()
	]

}; 











module.exports = config; 


