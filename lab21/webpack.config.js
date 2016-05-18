module.exports = {
    entry  : './src/scripts/app.js',
    output : {
        filename : 'app.js'
    },
    module : {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            {
                test   : /.js$/,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    devtool: 'eval-source-map'

    /*,
     plugins: [
     new webpack.DefinePlugin({
     'process.env': {
     'NODE_ENV': '"production"'
     }
     })
     ]*/

};
