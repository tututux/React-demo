const CracoAntDesignPlugin = require("craco-antd");

const cracoConfig = {
  devServer: {},
  babel: {},
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#1DA57A",
        },
      },
    },
  ],
  webpack: {},
};

module.exports = cracoConfig;
