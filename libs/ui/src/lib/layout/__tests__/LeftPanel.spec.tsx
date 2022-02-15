import { render } from '@testing-library/react';
import LeftPanel from '../LeftPanel';

describe('LeftPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LeftPanel>
        <div>Test</div>
      </LeftPanel>
    );
    expect(baseElement).toBeTruthy();
  });
});
