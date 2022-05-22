import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@mui/material';
import { apolloClient } from '../lib/apolloClient';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <CssBaseline />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
