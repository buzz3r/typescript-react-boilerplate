module.exports = {
    entry: './src/app.ts',
    output: {
        filename: './build/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader?sourceMap=true&target=ES5!ts-jsx-loader' }
        ]
    }
}