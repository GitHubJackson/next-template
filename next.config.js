/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2020/12/06
 * @LastEditTime: 2020/12/06
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const antdLessLoader = require('next-antd-aza-less');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const modifyVars = require('./assets/antd-custom.less');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => ({});
}

/* Without CSS Modules, with PostCSS */
module.exports = antdLessLoader({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: modifyVars
  }
});
