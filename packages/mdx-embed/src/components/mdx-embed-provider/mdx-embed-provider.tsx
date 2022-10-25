import React, { FunctionComponent } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { components } from './components';

interface IMdxProviderProps {
  /** React Children */
  children: React.ReactNode;
}

export const MDXEmbedProvider: FunctionComponent<IMdxProviderProps> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
