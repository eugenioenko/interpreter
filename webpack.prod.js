const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: false,
    mode: 'production',
    watch: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'
        ]
    },
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        minimizer: [new TerserPlugin()]
    }
};
