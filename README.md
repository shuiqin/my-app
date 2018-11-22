### 改协议
执行 set HTTPS=true&&npm start 改成https 安全协议

### 参考文档
https://blog.csdn.net/github_squad/article/details/57452333


###自定义config 弃用 react-scripts 期间修改start##

###引用代码分析插件analyze-webpack-plugin###
npm install --save-dev analyze-webpack-plugin

### 引入浏览器兼容性polyfill.js###
https://www.npmjs.com/package/whatwg-fetch

###  引入less-loader
npm install --save-dev less-loader

### 引入 react-error-overlay中间件
npm install --save-dev react-error-overlay
* TODO react-error-overlay 1,4版本api比较区别*
 "react-error-overlay": "^1.0.10"
  "react-error-overlay": "^4.0.1"
//const errorOverlayMiddleware = require('react-error-overlay/middleware');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');

  ###webpack版本从3升到4####
  issues: configuration has an unknown property 'mode'. These properties are valid:
  npm install --save-dev webpack

  ## 简单来说就是使用webpack官方维护的html-webpack-plugin来代替第三方的。applyPluginsWaterfall###
  issues: compilation.mainTemplate.applyPluginsWaterfall is not a function
  npm install --save-dev html-webpack-plugin

  ###自定义config 弃用 react-scripts 期间修改end##

  ### babel-loader配置跟启动index.js放置位置问题###
  index.js 需在include文件夹内
  ```
    ×
    Error: Module parse failed: Unexpected token (16:2)
    You may need an appropriate loader to handle this file type.
    | 
    | ReactDOM.render(
    >   <Provider store={store}>
    |     <ConnectedRouter history={history}>
    |       <div>
    ▼ 1 stack frames were expanded.
    Object../scripts/index.js
    http://localhost:3000/static/js/bundle.js:20641:7

  ```

  ####  添加eslintrc.js###
  https://cn.eslint.org/docs/rules/
  
  ### issues: Inline JavaScript is not enabled. Is it set in your options? ###
{ loader: 'less-loader', options: { javascriptEnabled: true } }
  
  ###TODO###
  1)手机站点 ， 兼容web
  2)mockserver
  3)fetch
  4)单叶拆多页
  5）gh-pages