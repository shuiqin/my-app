const path = require('path');
const paths = require('./paths');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
          process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        extensions: ['.js', '.json', '.jsx'],
        alias: {
          components: path.resolve(__dirname, '..') + '/src/common/components',
          container: path.resolve(__dirname, '..') + '/src/common/container',
          images: path.resolve(__dirname, '..') + '/src/common/images',
          pages: path.resolve(__dirname, '..') + '/src/common/pages',
          utils: path.resolve(__dirname, '..') + '/src/common/utils',
          data: path.resolve(__dirname, '..') + '/src/server/data',
          actions: path.resolve(__dirname, '..') + '/src/common/actions',
          reducers: path.resolve(__dirname, '..') + '/src/common/reducers',
          api: path.resolve(__dirname, '..') + '/src/common/api'
        },
        plugins: [
          new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
        ],
      },
        // 将一些在浏览器不起作用，但是引用到的库置空
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
};