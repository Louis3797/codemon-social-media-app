import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, useTheme } from '@mui/material';

export default function Navbar() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            color={theme.palette.secondary.main}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            codemon
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
