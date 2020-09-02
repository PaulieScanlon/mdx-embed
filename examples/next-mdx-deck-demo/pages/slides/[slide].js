import fs from 'fs'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import path from 'path'
import Header from '../../components/header'
import { TotalPagesContext } from '../../context/total-pages-context'
import { siteConfig } from '../../site.config.js'

let fonts = [
  `family=Arvo:ital,wght@0,400;0,700;1,400;1,700`,
  `family=Poppins:wght@800`,
  `family=Roboto:ital,wght@0,400;0,700;1,400`,
]

const SlideshowPage = ({
  totalSlidePages,
  currentSlide,
  filename,
}) => {
  const MDXContent = dynamic(() => import(`../../${filename}`))
  return (
    <TotalPagesContext.Provider value={totalSlidePages}>
      <Head>
        <title>
          {siteConfig.name} - {siteConfig.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href={`https://fonts.googleapis.com/css2?${fonts.join(
            `&`
          )}&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <Header
        name={siteConfig.name}
        title={siteConfig.title}
        date={siteConfig.date}
        url={siteConfig.author.url}
      />
      <MDXContent />
    </TotalPagesContext.Provider>
  )
}

export async function getStaticProps({ params }) {
  const filename = path.join('slides', `${params.slide}.mdx`)
  const slidesDirectory = path.join(process.cwd(), 'slides')
  const mdxFiles = fs.readdirSync(slidesDirectory)
  const totalSlidePages = mdxFiles.length

  return {
    props: {
      totalSlidePages,
      currentSlide: params.slide,
      filename,
    },
  }
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'slides')
  const mdxFiles = fs.readdirSync(postsDirectory)
  // Loop through all post files and create array of slugs (to create links)
  const paths = mdxFiles.map(filename => ({
    params: {
      slide: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default SlideshowPage
