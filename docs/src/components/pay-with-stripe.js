import React, { Fragment, FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, Heading, Input, Button, Grid, Flex, Box, Link, Text, Spinner } from 'theme-ui';

import theme from '../theme';

import { StripeLogo } from './stripe-logo';

export const PayWithStripe: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState(3);

  const [response, setResponse] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
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

    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await axios.post('https://paulieapi.gatsbyjs.io/api/make-stripe-payment', {
        product: 'prod_KAgqqzBEBmuYkT',
        amount: inputValue,
        success_url: 'https://www.mdx-embed.com/',
        cancel_url: 'https://www.mdx-embed.com/',
      });

      setIsSubmitting(false);
      setResponse(response.data.message);
      window.open(response.data.url);
    } catch (error) {
      if (error.response) {
        setResponse(error.response.data.message);
      } else {
        setResponse(error.name);
      }
      setIsSubmitting(false);
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
        <Box as="span" role="img" aria-label="Face Savoring Food Emoji" sx={{ fontSize: '64px', mx: 'auto' }}>
          😋
        </Box>
        <Box
          sx={{
            mb: 3,
          }}
        >
          <Heading as="h4" sx={{ fontSize: '32px', textAlign: 'center' }}>
            Pay what you want
          </Heading>
          <Text
            as="p"
            sx={{
              m: 0,
              display: 'grid',
              gap: 1,
              gridTemplateColumns: ['auto', 'auto auto'],
              justifyContent: 'center',
              textAlign: ['center', 'left'],
            }}
          >
            If you feel like supporting this project feel free to make a secure contribution <StripeLogo />
          </Text>
        </Box>
      </Grid>
      {response ? null : (
        <Grid
          sx={{
            gap: 1,
            maxWidth: 240,
            mx: 'auto',
          }}
        >
          <Grid
            sx={{
              gridTemplateColumns: 'auto 136px',
              gap: 1,
            }}
          >
            <Flex
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <Box
                as="span"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-58%)',
                  marginLeft: '6px',
                  '-moz-transform': 'translateY(-42%)',
                }}
              >
                $
              </Box>
              <Input
                type="number"
                min={1}
                max={100}
                value={inputValue}
                disabled={isSubmitting}
                onChange={handleChange}
                sx={{
                  paddingLeft: 3,
                }}
              />
            </Flex>
            <Button disabled={isSubmitting} onClick={makeStripePayment} sx={{ py: isSubmitting ? [1, 0] : 2 }}>
              {isSubmitting ? <Spinner sx={{ color: 'background', height: '24px' }} /> : 'Buy me a pint'}
            </Button>
          </Grid>
        </Grid>
      )}
      {hasError ? (
        <Text as="small" variant="text.small" sx={{ display: 'block', color: 'error', textAlign: 'center' }}>
          {response}
        </Text>
      ) : null}
    </ThemeProvider>
  );
};
