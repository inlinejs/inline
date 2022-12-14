const { series } = require("async");
const { exec } = require("child_process");

series([
  // Build the client-side assets.
  (callback) =>
    exec(
      "esbuild index.ts --bundle --minify --sourcemap --outdir=dist --tsconfig=tsconfig.json",
      callback
    ),
  //(callback) => exec("tsc -p tsconfig.json", callback),
  (callback) =>
    exec(
      "rsync -avm --remove-source-files --include '*.css' --exclude '*' . dist",
      callback
    ),
]);
