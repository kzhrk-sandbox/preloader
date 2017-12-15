import webpack from 'webpack';
import path from 'path';

export default {
	entry: {
		index: './resource/webpack/index.js'
	},

	output: {
		path: path.resolve(__dirname, './public/js'),
		filename: '[name].bundle.js'
	},

	resolve: {
		extensions: ['.js', '.pug', '.scss']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader"
				}]
			},{
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
			},{
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
}