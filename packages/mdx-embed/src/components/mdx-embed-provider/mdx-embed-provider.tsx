import { MDXProvider } from '@mdx-js/react';
import React, { FunctionComponent } from 'react';
import { CodePen } from '../code-pen';

const components = {
  CodePen,
} as any;

export const MDXEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
