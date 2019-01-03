const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports={
    minimizer:[
        new UglifyJsPlugin({
            sourceMap: true,
        })
    ]
}