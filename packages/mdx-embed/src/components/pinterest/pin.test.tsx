import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { Pin } from './';

describe('<Pin />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const pinId = '637963103444140543';
    render(<Pin pinId={pinId} size="medium" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('pin')).toBeDefined();
  });
});
