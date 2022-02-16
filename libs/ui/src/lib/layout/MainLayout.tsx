import React from 'react';
import { useScreenType } from '@codemon/shared-hooks';
import { RightPanel } from './RightPanel';
import { Grid } from '@mui/material';
import Navbar from '../../Navbar/Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
  right?: React.ReactNode;
  left?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  left = <div />,
  right = <div />,
}) => {
  const screenType = useScreenType();

  let panel = null;

  switch (screenType) {
    case '1-cols':
      panel = (
        <>
          <nav>
            <Navbar />
          </nav>
          <body>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item xs={10} sm={8} md={6} lg={5} xl={4}>
                {children}
              </Grid>
              <RightPanel>{right}</RightPanel>
            </Grid>
          </body>
        </>
      );
      break;

    case 'fullscreen':
      panel = (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={8}>
            {children}
          </Grid>
        </Grid>
      );
  }

  return <div>{panel}</div>;
};

export default MainLayout;
