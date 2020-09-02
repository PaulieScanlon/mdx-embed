// Code credit to Chris Biscardi

const fs = require('fs').promises
const frontmatter = require('gray-matter')
const mdx = require('@mdx-js/mdx')
const rehypeSlug = require('rehype-slug')

exports.sourceData = async ({ createPage, ...options }) => {
  console.log('sourceData')
  const files = await fs.readdir('./content/posts/')

  return Promise.all(
    files.map(async filename => {
      const file = await fs.readFile(
        `./content/posts/${filename}/index.mdx`,
        'utf-8'
      )
      let compiledMDX

      const { data, content } = frontmatter(file)

      try {
        compiledMDX = await mdx(content, {
          rehypePlugins: [rehypeSlug],
        })
      } catch (e) {
        console.log(e)
        throw e
      }

      await createPage({
        module: `/** @jsx mdx */
            import {mdx} from '@mdx-js/preact';
            ${compiledMDX}`,
        slug: filename,
        data: { ...data, slug: filename },
      })

      // Data to be stored in `mdx-posts.json` file
      return {
        ...data,
        slug: filename,
      }
    })
  )
}
