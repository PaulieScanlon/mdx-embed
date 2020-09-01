import React from 'react';
import { Box, Text, Link } from 'theme-ui';

export const Quote = ({ text, name, username }) => {
  return (
    <Box>
      <Text variant="styles.p" sx={{ color: 'lightGrey', fontStyle: 'italic' }}>
        {text}
      </Text>
      <Text variant="styles.p" sx={{ color: 'lightGrey', display: 'inline', fontSize: 0, mr: 2 }}>
        {name}
      </Text>
      <Link
        variant="styles.a"
        href={`https://twitter.com/${username}`}
        target="_blank"
        sx={{ color: 'secondary', fontSize: 0 }}
      >
        {`@${username}`}
      </Link>
    </Box>
  );
};
