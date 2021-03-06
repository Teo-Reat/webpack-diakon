let path = require("path");
let common = require("./webpack.common");
let merge = require("webpack-merge");
let CleanWebpackPlugin = require("clean-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "js/script.js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			// new HtmlWebpackPlugin({
			// 	template: "./src/template.html",
			// 	inject: true,
			// 	chunks: ['style'],
			// 	minify: {
			// 		removeAttributeQuotes: true,
			// 		collapseWhitespace: true,
			// 		removeComments: true
			// 	}
			// }),
			// new HtmlWebpackPlugin({
			// 	template: "./src/pages/webinar.html",
			// 	filename: 'webinar.html',
			// }),
			// new HtmlWebpackPlugin({
			// 	template: "./src/pages/lk-personal.html",
			// 	filename: 'lk-personal.html',
			// }),
			// new HtmlWebpackPlugin({
			// 	template: "./src/pages/lk-instructions.html",
			// 	filename: 'lk-instructions.html',
			// }),
			// new HtmlWebpackPlugin({
			// 	template: "./src/pages/lk-form.html",
			// 	filename: 'lk-form.html',
			// }),
			new HtmlWebpackPlugin({
				template: "./src/pages/dealer.html",
				filename: 'dealer.html',
			}),
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "css/[name].css" }),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, //3. Extract css into files
					"css-loader", //2. Turns css into commonjs
					"postcss-loader",
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	}
});
