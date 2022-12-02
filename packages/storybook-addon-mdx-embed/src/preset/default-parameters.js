import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { MDXEmbedProvider } from 'mdx-embed';

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <MDXEmbedProvider>{children}</MDXEmbedProvider>
      </DocsContainer>
    ),
  },
};
