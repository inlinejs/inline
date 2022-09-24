import { highlightCodePlugin, searchPlugin } from "doxicity/dist/plugins.js";

export default {
  assetFolderName: "assets",
  cleanOnPublish: true,
  copyAssets: [],
  data: {},
  dev: true,
  helpers: [],
  inputDir: "./packages",
  outputDir: "./docs",
  plugins: [highlightCodePlugin(), searchPlugin()],
  primaryColor: "green",
};
