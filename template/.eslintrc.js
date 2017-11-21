module.exports = {
  parserOptions: {
    // ECMAScript 版本
    ecmaVersion: 2017,
    // 支持 ECMAScript 模块
    sourceType: 'module',
    // 对象，表示你想使用的额外的语言特性:
    ecmaFeatures: {
      // 启用对实验性的 object rest/spread properties 的支持
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  extends: [
    "eslint-config-yi/vue",
  ],
  rules: {
    //Your own configuration for cover my settings
  }
}