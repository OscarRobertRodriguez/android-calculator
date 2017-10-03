
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
				test: /\.js$/,
				exclude: /node_modules/  
			},
			{

				use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader'
				}
				],
				test: /\.css$/
			},
			{
				use:'url-loader',
				test: /\.(woff|woff2)$/

			},


		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]

}; 











module.exports = config; 


