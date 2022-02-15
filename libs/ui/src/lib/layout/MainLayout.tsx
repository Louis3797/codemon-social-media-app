import React from 'react';
import Container from '@mui/material/Container';
import { useScreenType } from '@codemon/shared-hooks';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

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
    case '2-cols':
      panel = (
        <>
          <LeftPanel>{left}</LeftPanel>
          {children}
          <RightPanel>{right}</RightPanel>
        </>
      );
      break;
    case '1-cols':
      panel = (
        <>
          <LeftPanel>{left}</LeftPanel>
          {children}
        </>
      );
      break;
    case 'fullscreen':
      panel = <Container>{children}</Container>;
  }

  return <Container>{panel}</Container>;
};

export default MainLayout;
