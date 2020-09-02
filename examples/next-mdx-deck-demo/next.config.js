const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX({
  // Pick up MDX files in the /pages/ directory
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
