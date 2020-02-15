const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#fd5c63",
      "@btn-danger-bg": "#008489",
      "@btn-danger-border": "#008489",
      "@link-color": "rgba(0, 0, 0, 0.65)",
      "@border-radius-base": "2px",
      "@layout-header-background": "#ffffff",
      "@layout-footer-background": "@layout-header-background"
    }
  })
);
