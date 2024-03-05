/** @type {import('next'). NextConfig} */
const webpack = require("webpack");
const nextConfig = {
images: {
  loader: 'custom',
  loaderFile: './my-loader.js',
},
};
module.exports = nextConfig;