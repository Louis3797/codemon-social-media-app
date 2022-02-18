import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/styles.css';
import { theme } from '../styles/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default CustomApp;
