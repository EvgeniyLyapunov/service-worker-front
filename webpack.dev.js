const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		open: true,
		compress: true,
		watchFiles: ['src/**/*'],
		port: 8181,
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],
});
