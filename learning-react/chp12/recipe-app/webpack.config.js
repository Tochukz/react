const path = require('path');
var UglifyJsPlugin= require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/index-server.js",
    output: {
        path: __dirname + "/assets",
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool:'#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                       'style-loader','css-loader',
                       {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')]
                            }
                        }
                ]
            }
        ]
    },
    plugins:[
        new UglifyJsPlugin({
             cache:true,
             parallel:true,
             uglifyOptions:{
                compress: false,
                ecma: 6,
                mangle: true,
             },
             sourceMap: true

        })
    ],
    devServer: {
      contentBase: [path.join(__dirname, 'dist'), ]
    },
    mode:'development'
};
