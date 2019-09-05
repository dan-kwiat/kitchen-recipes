const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const withSass = require('@zeit/next-sass')

module.exports = withMDX(
  withSass({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    sassLoaderOptions: {
      includePaths: ['node_modules']
    }
  })
)
