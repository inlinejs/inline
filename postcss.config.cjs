// const defaultConfig = require(`@inlinejs/inline-config/postcss.config`);
// module.exports = {
//   ...defaultConfig,
// };

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("postcss-discard-comments"),
  ],
};
