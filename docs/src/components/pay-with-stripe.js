import React, { Fragment, FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, Input, Button, Grid, Flex, Box, Link, Text } from 'theme-ui';

import theme from '../theme';

export const PayWithStripe: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [cta, setCta] = useState({
    type: 'button',
    message: 'Make Donation with Stripe',
    url: null,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    if (value) {
      setInputValue(parseInt(value));
    } else {
      setInputValue(1);
    }
  };

  const makeStripePayment = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://paulieapi.gatsbyjs.io/api/dummy-stripe-payment', {
        product: 'prod_K6dGWR54oYDK1q',
        amount: inputValue,
        success_url: 'http://localhost:6006/',
        cancel_url: 'http://localhost:6006/',
      });
      console.log(response.data);
      setIsLoading(false);
      setCta({
        type: 'link',
        message: 'Proceed to checkout',
        url: response.data.url,
      });
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
      console.warn(JSON.stringify(error, null, 2));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {hasError ? (
        <Text as="small" sx={{ color: 'error' }}>
          Blast! There's been an error
        </Text>
      ) : (
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', 'auto 1fr'],
            gap: 1,
            maxWidth: ['100%', 300],
          }}
        >
          {cta.type === 'button' ? (
            <Fragment>
              <Flex
                style={{
                  display: 'inline-block',
                  position: 'relative',
                }}
              >
                <Box as="span" sx={{ position: 'absolute', marginTop: 2, marginLeft: 2 }}>
                  $
                </Box>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={inputValue}
                  disabled={isLoading}
                  onChange={handleChange}
                  sx={{
                    paddingLeft: 3,
                  }}
                />
              </Flex>
              <Button disabled={isLoading} onClick={makeStripePayment}>
                {cta.message}
              </Button>
            </Fragment>
          ) : (
            <Link href={cta.url} target="_blank" rel="noopener">
              {cta.message}
            </Link>
          )}
        </Grid>
      )}
    </ThemeProvider>
  );
};
