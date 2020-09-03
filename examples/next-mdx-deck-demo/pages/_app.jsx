import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';

export default ({ Component, pageProps }) => (
  <MDXProvider>
    <MDXEmbedProvider>
      <Component {...pageProps} />
    </MDXEmbedProvider>
  </MDXProvider>
);
