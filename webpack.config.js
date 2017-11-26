const path = require("path");

module.exports = {
	entry: './js/app.jsx',
	output: { 
		path: path.resolve("js"), 
		filename: './out.js'
	},
	devServer: {
		inline: true,
		contentBase: './',
		port: 3001
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx$/, 
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { 
					presets: ['es2015', 'react', 'stage-2']
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader", options: {
						sourceMap: true
					}
				}, {
					loader: "sass-loader", options: {
						sourceMap: true
					}
				}]
			}
		]
	}
}