import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

export const wrapRootElement = ({ element }) => {
  return <MDXEmbedProvider>{element}</MDXEmbedProvider>;
};
