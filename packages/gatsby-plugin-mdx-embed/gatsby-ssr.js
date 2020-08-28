// import React from 'react';
// import { MDXEmbedProvider } from 'mdx-embed';

// export const wrapRootElement = ({ element }) => {
//   return <MDXEmbedProvider>{element}</MDXEmbedProvider>;
// };

import React from 'react';

export const wrapPageElement = ({ element }) => {
  return <div style={{ border: '5px solid red' }}>{element}</div>;
};
