require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

// configuracion de nextjs
// https://github.com/webpack-contrib/url-loader
const nextConfiguration = {
  test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
  loader: "url-loader?limit=100000",
  distDir: "../.next",
};

const imagesConfig = {
  distDir: "../.next",
  ignoreTypes: ["svg"],
};

const optimizedImagesConfig = {
  distDir: "../.next",
  inlineImageLimit: 8192,
  imagesFolder: "images",
  imagesName: "[name]-[hash].[ext]",
  handleImages: ["jpeg", "jpg", "svg", "png"],
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  webp: {
    preset: "default",
    quality: 75,
  },
};

module.exports = withPlugins(
  [[withOptimizedImages, optimizedImagesConfig], nextConfiguration],
  {
    env: {
      // Hacer una referencia a el variable que se definió en el archivo .env y ponerlo accesible en Build
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
  }
);
