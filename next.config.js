const withCSS = require("@zeit/next-css");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

const cssConfig = {};

const nextConfiguration = [
  {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    loader: "url-loader?limit=100000"
  }
];

const optimizedImagesConfig = {
  inlineImageLimit: 8192,
  imagesFolder: "images",
  imagesName: "[name]-[hash].[ext]",
  handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif"],
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80
  },
  optipng: {
    optimizationLevel: 3
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3
  },
  webp: {
    preset: "default",
    quality: 75
  }
};

module.exports = withPlugins([
  [withCSS, cssConfig],
  [withOptimizedImages, optimizedImagesConfig],
  nextConfiguration
]);
