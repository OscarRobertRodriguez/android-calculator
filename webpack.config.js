
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
		new ExtractTextPlugin('style.css')
	]

}; 











module.exports = config; 


