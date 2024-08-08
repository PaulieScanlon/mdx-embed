import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

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
