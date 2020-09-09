import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider>
      <MDXEmbedProvider>
        <Component {...pageProps} />
      </MDXEmbedProvider>
    </MDXProvider>
  ) 
}

export default MyApp
