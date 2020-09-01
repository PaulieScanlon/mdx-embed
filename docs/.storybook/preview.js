import React from 'react';
import { addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';
import * as ThemeUIComponents from 'theme-ui';
import { Heading, Text } from 'theme-ui';

import theme from '../src/theme';
import { Quote } from './components/quote';

const components = {
  ...ThemeUIComponents,
  Quote,
};

import { MDXEmbedProvider } from 'mdx-embed';

addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <MDXEmbedProvider>{children}</MDXEmbedProvider>
          </MDXProvider>
        </ThemeProvider>
      </DocsContainer>
    ),
  },
});

export const parameters = {
  docs: {
    components: {
      h1: ({ children }) => <Heading as="h1">{children}</Heading>,
      h2: Heading,
      h3: ({ children }) => <Heading as="h3">{children}</Heading>,
      h4: ({ children }) => <Heading as="h4">{children}</Heading>,
      h5: ({ children }) => <Heading as="h5">{children}</Heading>,
      h6: ({ children }) => <Heading as="h6">{children}</Heading>,
      p: ({ children }) => (
        <Text as="p" sx={{ ...theme.text.default }}>
          {children}
        </Text>
      ),
    },
  },
};
