import React, { useState } from 'react';
import { ThemeProvider, Input, Button, Grid, Flex, Box, Link, Text, Spinner } from 'theme-ui';

import theme from '../theme';

export const Test = () => {
  const [inputValue, setInputValue] = useState(1);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value) {
      setInputValue(parseInt(value));
    } else {
      setInputValue(1);
    }
  };

  const handleClick = () => {
    console.log('handleClick: ', parent);
    parent.postMessage(
      {
        type: 'submit',
        value: inputValue,
        product: 'prod_K6dGWR54oYDK1q',
        // success_url: 'http://localhost:6006',
        // cancel_url: 'http://localhost:6006',
        success_url: 'https://www.mdx-embed.com',
        cancel_url: 'https://www.mdx-embed.com',
      },
      'https://www.mdx-embed.com',
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          alignItems: 'center',
          gridTemplateColumns: ['1fr', 'auto 1fr'],
          gap: 1,
          maxWidth: ['100%', 220],
        }}
      >
        <Flex
          style={{
            display: 'inline-block',
            position: 'relative',
          }}
        >
          <Box as="span" id="stripe-currency" sx={{ position: 'absolute', marginTop: 2, marginLeft: 2 }}>
            $
          </Box>
          <Input
            id="stripe-input"
            type="number"
            min="1"
            max="100"
            aria-hidden={false}
            sx={{
              paddingLeft: 3,
            }}
            value={inputValue}
            onChange={handleChange}
          />
        </Flex>

        <Button id="stripe-button" aria-hidden={false} onClick={handleClick}>
          <Spinner
            id="stripe-spinner"
            aria-hidden={true}
            style={{ display: 'none' }}
            sx={{ color: 'background', height: '24px', mx: 'auto' }}
          />
          <Text id="stripe-cta" as="span" sx={{ color: 'background', fontSize: 'button' }}>
            Pay with Stripe
          </Text>
        </Button>
        <Button
          as="a"
          id="stripe-link"
          href=""
          aria-hidden={true}
          style={{
            display: 'none',
          }}
        >
          Stripe Link
        </Button>
      </Grid>
    </ThemeProvider>
  );
};
