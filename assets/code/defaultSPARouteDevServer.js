const path = require('path');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './',
        historyApiFallback: {   // SPA default route
          index: 'index.html'
        }
    },
};