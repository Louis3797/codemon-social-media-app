import { MainLayout } from '@codemon/ui';
import { Box } from '@mui/material';
import React from 'react';

export const Index: React.FC = () => {
  return (
    <>
      <MainLayout
        right={
          <div>
            <Box sx={{ bgcolor: '#000', height: '100vh' }} />
          </div>
        }
        left={
          <div>
            <Box sx={{ bgcolor: '#ff0000', height: '100vh' }} />
          </div>
        }
      >
        <div>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
