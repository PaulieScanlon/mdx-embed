// const React = require('react');
// const { MDXEmbedProvider } = require('mdx-embed');

// exports.wrapRootElement = ({ element }) => {
//   return <MDXEmbedProvider>{element}</MDXEmbedProvider>;
// };

import React from 'react';

export const wrapPageElement = ({ element }) => {
  return <div style={{ border: '5px solid red' }}>{element}</div>;
};
