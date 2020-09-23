import React from 'react';
import { ThemeProvider, Flex, Text, Link } from 'theme-ui';

import theme from '../theme';

export const Quote = ({ text, name, username }) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ flexDirection: 'column' }}>
        <Text as="p" variant="styles.p" sx={{ color: 'lightGrey', flexGrow: 1, fontStyle: 'italic' }}>
          {text}
        </Text>
        <Flex>
          <Text variant="styles.p" sx={{ color: 'lightGrey', display: 'inline', my: 0, mr: 1 }}>
            {`${name} - `}
          </Text>
          <Link
            variant="styles.a"
            href={`https://twitter.com/${username}`}
            target="_blank"
            sx={{ color: 'secondary', my: 0 }}
          >
            {`@${username}`}
          </Link>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};
