const config = {
  entry: "src/index.ts",
  cjs: {
    type: "rollup",
  },
  cssModules: false,
  extractCSS: true,
};

module.exports = config;
