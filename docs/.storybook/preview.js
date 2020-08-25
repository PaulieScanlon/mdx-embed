import React from 'react'
import { addParameters } from '@storybook/react'
import { DocsContainer } from '@storybook/addon-docs/blocks'

import { MDXEmbedProvider } from 'mdx-embed'

addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <MDXEmbedProvider>{children}</MDXEmbedProvider>
      </DocsContainer>
    ),
  },
})
