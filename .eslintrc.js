module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,

    // 关闭语句强制分号结尾
    "semi": [0],

    // allow async-await
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    "quotes": [1, "single"],

    "spaced-comment": ["error", "always"],
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],

    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, { "max": 100 }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
