module.exports = {   //fix lỗi eslint bắt lỗi đường dẫn root 
    settings: {
      "import/resolver": {
        alias: [
          ["@components", "./src"],
        ]
      }
    },
    "rules": {
        "quotes": ["error", "double"]
    },
    parser: "@babel/eslint-parser",
  }