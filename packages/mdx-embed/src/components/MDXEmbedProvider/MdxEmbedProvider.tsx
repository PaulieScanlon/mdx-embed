import React, { FunctionComponent } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { CodePen } from '../CodePen';

const components = {
  CodePen,
} as any;

export const MDXEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
