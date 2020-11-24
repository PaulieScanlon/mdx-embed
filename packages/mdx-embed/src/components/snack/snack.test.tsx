import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Snack } from './';

describe('<Snack />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const snackId = '@matiasfh/animated';
    render(<Snack snackId={snackId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('snack')).toBeDefined();
  });
});
