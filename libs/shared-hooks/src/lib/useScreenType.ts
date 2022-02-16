import { useMediaQuery } from 'react-responsive';

export const useScreenType = () => {
  const is1Cols = useMediaQuery({ minWidth: 599 });

  if (is1Cols) {
    return '1-cols';
  }

  return 'fullscreen';
};
