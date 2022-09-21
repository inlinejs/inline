const postcss = require("postcss");
const fs = require("fs");
const glob = require("glob");
const postcssConfig = require("@inlinejs/inline-config/postcss.config");

/**
 * Function to process a source file and output to a destination via postcss.
 *
 * @param {string} src
 * @param {string} dest
 */
const global = (src, dest) => {
  fs.readFile(src, (err, css) => {
    postcss([...postcssConfig.plugins])
      .process(css, { from: src, to: dest })
      .then((result) => {
        console.log(`Writing ${src} to ${dest}...`);
        fs.writeFile(dest, result.css, () => true);
        if (result.map) {
          fs.writeFile(`${dest}.map`, result.map.toString(), () => true);
        }
      });
  });
};

/**
 * Function to wrap all generic .css files with CSS template literals suitable for consumption via Lit.
 *
 * @param {string} filepath
 */
const createCssLiterals = (filepath) => {
  const filename = filepath.replace(/^.*[\\\/]/, "");
  fs.readFile(filepath, (err, css) => {
    const nFilePath = `${filepath}.lit.ts`;
    postcss([...postcssConfig.plugins])
      .process(css, { from: filepath, to: nFilePath })
      .then((result) => {
        if (filepath.includes("css-variables")) {
          createVariableLiterals(result, nFilePath);
        } else {
          createComponentLiterals(result, nFilePath);
        }
      });
  });
};

const createComponentLiterals = (result, path) => {
  fs.writeFile(
    path,
    `
import { css } from 'lit';
export default css\`
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
${result.css}\`;`,
    () => true
  );
};

const createVariableLiterals = (result, path) => {
  fs.writeFile(
    path,
    `
import { css } from 'lit';
export default css\`
:host {
${result.css}\`;`,
    () => true
  );
};

// Run the component style generation.
glob("packages/**/*.css", (err, files) => {
  files.forEach(createCssLiterals);
});
