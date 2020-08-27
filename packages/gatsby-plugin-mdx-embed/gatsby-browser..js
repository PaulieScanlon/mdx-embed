import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

export const wrapRootElement = ({ element }) => {
  return (
    <div style={{ border: '1px solid red' }}>
      <MDXEmbedProvider>{element}</MDXEmbedProvider>;
    </div>
  );
};
