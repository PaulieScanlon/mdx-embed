import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

export const wrapPageElement = ({ element }) => {
  return <MDXEmbedProvider>{element}</MDXEmbedProvider>;
};
