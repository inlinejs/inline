module.exports = {
  plugins: [
    require("postcss-preset-env", {
      // @todo: Determine the appropriate stage to rely on.
      stage: 2,
    }),
    require("cssnano")({
      // @todo: Comment removal isn't working here.
      preset: ["advanced"],
    }),
  ],
};
