import React, { Fragment, FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, Input, Button, Grid, Flex, Box, Link, Text, Spinner } from 'theme-ui';

import theme from '../theme';

export const PayWithStripe: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState(1);

  const [response, setResponse] = useState(null);
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const [isPosting, setIsPosting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value) {
      setInputValue(parseInt(value));
    } else {
      setInputValue(1);
    }
  };

  const makeStripePayment = async () => {
    setResponse('');
    setCheckoutUrl(null);
    setIsPosting(true);
    setHasError(false);

    try {
      const response = await axios.post('https://paulieapi.gatsbyjs.io/api/make-stripe-payment', {
        product: 'prod_K6dGWR54oYDK1q',
        amount: inputValue,
        success_url: 'https://www.mdx-embed.com/',
        cancel_url: 'https://www.mdx-embed.com/',
      });

      setIsPosting(false);
      setResponse(response.data.message);
      setCheckoutUrl(response.data.url);
    } catch (error) {
      setResponse('🚫 Request blocked by CORS');
      setIsPosting(false);
      setHasError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          gap: 1,
        }}
      >
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', 'auto auto'],
            gap: 1,
            maxWidth: ['100%', 300],
          }}
        >
          {!checkoutUrl ? (
            <Fragment>
              <Flex
                style={{
                  position: 'realtive',
                  display: 'inline-block',
                  position: 'relative',
                }}
              >
                <Box as="span" sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', marginLeft: 2 }}>
                  $
                </Box>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={inputValue}
                  disabled={isPosting}
                  onChange={handleChange}
                  sx={{
                    paddingLeft: 3,
                  }}
                />
              </Flex>
              <Button disabled={isPosting} onClick={makeStripePayment} sx={{ py: isPosting ? [1, 0] : 2 }}>
                {isPosting ? <Spinner sx={{ color: 'background', height: '24px' }} /> : 'Pay with Stripe'}
              </Button>
            </Fragment>
          ) : (
            <Button as="a" variant="secondary" href={checkoutUrl} target="_blank" rel="noopener">
              Checkout
            </Button>
          )}
        </Grid>

        {response ? (
          <Text as="small" variant="text.small" sx={{ color: hasError ? 'error' : 'success' }}>
            {response}
          </Text>
        ) : null}
      </Grid>
    </ThemeProvider>
  );
};
