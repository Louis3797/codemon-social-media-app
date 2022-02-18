import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#fffff',
      main: '#ffffff',
      dark: '#B2B2B2',
    },
    secondary: {
      light: '#F7E43D',
      main: '#f5de0d',
      dark: '#AB9B09',
    },
    background: {
      default: '#23272a',
      paper: '#2c2f33',
    },
  },
});
