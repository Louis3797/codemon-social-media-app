import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   light: '#fffff',
    //   main: '#ffffff',
    //   dark: '#B2B2B2',
    // },
    // secondary: {
    //   light: '#F7E43D',
    //   main: '#f5de0d',
    //   dark: '#AB9B09',
    // },
    // background: {
    //   default: '#23272a',
    //   paper: '#2c2f33',
    // },
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Welcome to web!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
