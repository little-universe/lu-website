// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  version: 2,
  target: 'serverless'
})
