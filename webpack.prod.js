const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/atscript.ts',
    devtool: 'source-map',
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
        filename: 'atscript.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        minimizer: [new TerserPlugin()]
    }
};
