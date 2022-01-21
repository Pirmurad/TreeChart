const mix = require("laravel-mix");

mix.webpackConfig({
  resolve: {
    alias: {
      path: require.resolve("path-browserify"),
    },
  },
});

mix
  .js("./src/js/app.js", "public/js/app.js")
  .sass("./src/styles/app.scss", "public/css/app.css")
  .options({
    processCssUrls: false,
  })
  .minify("public/js/app.js", "public/js/js.css")
  .minify("public/css/app.css", "public/css/full.css");

mix.webpackConfig({
  plugins: [],
  resolve: {},
  stats: {
    children: true,
  },
});

if (mix.inProduction()) {
  mix.version();
}
