const path = require('path');
module.exports = function(env, argv) {
    env = env || {};

    return {
        entry: './src/index',
        module: {
            rules: [
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                { test: /\.(eot|svg|ttf|woff|woff2)$/i, use: 'file-loader' }
            ]
        },
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm',
                'bootstrap': 'bootstrap/dist/css/bootstrap.css'
            }
        },
        ...env.development ? require('./config/webpack.development') : require('./config/webpack.production')
    };

}