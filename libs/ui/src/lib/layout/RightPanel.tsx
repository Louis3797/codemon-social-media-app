import React from 'react';
import { Grid } from '@mui/material';

export const RightPanel: React.FC = ({ children }) => {
  return (
    <Grid item xs={4} md={4} lg={3} xl={2.5}>
      {children}
    </Grid>
  );
};
