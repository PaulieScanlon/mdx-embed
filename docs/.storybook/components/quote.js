import React from 'react';
import { Flex, Text, Link } from 'theme-ui';

export const Quote = ({ text, name, username }) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Text variant="styles.p" sx={{ color: 'lightGrey', flexGrow: 1, fontStyle: 'italic' }}>
        {text}
      </Text>
      <Flex>
        <Text variant="styles.p" sx={{ color: 'lightGrey', display: 'inline', fontSize: 0, my: 0, mr: 1 }}>
          {`${name} - `}
        </Text>
        <Link
          variant="styles.a"
          href={`https://twitter.com/${username}`}
          target="_blank"
          sx={{ color: 'secondary', fontSize: 0, my: 0 }}
        >
          {`@${username}`}
        </Link>
      </Flex>
    </Flex>
  );
};
