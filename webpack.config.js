
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js', 
		publicPath: './'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/ 
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			}


		]
	},
	plugins: [
		// new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]

}; 











module.exports = config; 


