import { render } from '@testing-library/react';
import RightPanel from '../RightPanel';

describe('RightPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RightPanel>
        <div>Test</div>
      </RightPanel>
    );
    expect(baseElement).toBeTruthy();
  });
});
