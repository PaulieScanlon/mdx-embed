import React, { FunctionComponent } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { components } from './components';

export const MDXEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
