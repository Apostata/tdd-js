const webpack = require('webpack');
const jsLoader = require('./loaders/jsLoaders');
const plugins = require('./plugins');
const optimization = require('./optimization');
const nodeENV = process.env.NODE_ENV || 'production';

console.log(nodeENV);

const webpackConfig = {
    mode: nodeENV, //para utilizar o optimization
    entry:{
        app: './src/app.js'
    },
    output:{
        filename: "[name].js",
    },
    optimization: optimization,
    //devtool:'eval-source-map', //fast rebuild and allows inline breakpoints - cheap map só em dev
    devtool:'source-map',
    module: {
        rules:[
            jsLoader
            //,cssLoaders,
            //,fileLoaders
        ]
    },

    // module: { webpack 2 e 3
    //     loaders:[
    //         jsLoader
    //         //,cssLoaders,
    //         //,fileLoaders
    //     ]
    // },
    plugins: plugins,
    watch: true
};

module.exports = webpackConfig;

