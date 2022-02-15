import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#fffff',
      dark: '#B2B2B2',
    },
    secondary: {
      main: '#f5de0d',
      light: '#F7E43D',
      dark: '#AB9B09',
    },
    background: {
      default: '#23272a',
      paper: '#2c2f33',
    },
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
