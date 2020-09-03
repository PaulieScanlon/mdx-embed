import fs from 'fs';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import path from 'path';

import { siteConfig } from '../../site.config.js';

const SlideshowPage = ({ totalSlidePages, currentSlide, filename }) => {
  const MDXContent = dynamic(() => import(`../../${filename}`));
  return <MDXContent />;
};

export async function getStaticProps({ params }) {
  const filename = path.join('slides', `${params.slide}.mdx`);
  const slidesDirectory = path.join(process.cwd(), 'slides');
  const mdxFiles = fs.readdirSync(slidesDirectory);
  const totalSlidePages = mdxFiles.length;

  return {
    props: {
      totalSlidePages,
      currentSlide: params.slide,
      filename,
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'slides');
  const mdxFiles = fs.readdirSync(postsDirectory);
  // Loop through all post files and create array of slugs (to create links)
  const paths = mdxFiles.map((filename) => ({
    params: {
      slide: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default SlideshowPage;
