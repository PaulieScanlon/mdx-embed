import React from 'react';

import { MDXEmbedProvider } from 'mdx-embed';

export default ({ children }) => (
  <div>
    <MDXEmbedProvider>{children}</MDXEmbedProvider>
  </div>
);
