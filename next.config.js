/** @type {import('next').NextConfig} */
/** first get path object from node */ 
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  /** second add sass config */ 
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import './base.scss';`
  }
}

module.exports = nextConfig
