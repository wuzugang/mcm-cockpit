module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ],
    ["@babel/plugin-syntax-dynamic-import"]
  ],
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
};

