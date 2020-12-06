/*
 * @Desc: 
 * @Author: JacksonZhou
 * @Date: 2020/12/06
 * @LastEditTime: 2020/12/06
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLess = require('@zeit/next-less')

module.exports = withLess({
  cssModules: true, // 在项目中使用cssModule
  lessLoaderOptions: {
    javascriptEnabled: true
  },
})