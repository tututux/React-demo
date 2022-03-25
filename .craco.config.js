const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");
const { getCSSModuleLocalIdent } = require("./.craco.plugins.js");

/// less 变量覆盖 --- 修改默认主题色、字体等
const lessLoaderOptions = {
  lessOptions: {
    modifyVars: {
      // "@primary-color": "#1DA57A",
    },
    javascriptEnabled: true,
  },
};

const cracoConfig = {
  devServer: {},
  babel: {},
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: { lessLoaderOptions },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions,
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]_[local]_[hash:base64:5]",
            getLocalIdent: getCSSModuleLocalIdent,
          },
        },
        modifyLessRule(lessRule, context) {
          lessRule.test = /(\.module\.less|\.less)$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
      },
    },
  ],
  webpack: {},
};

module.exports = cracoConfig;
