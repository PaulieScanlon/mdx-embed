import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Cinnamon } from './';

describe('<Cinnamon />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const cinnamonId = '420855615405950583';
    render(<Cinnamon cinnamonId={cinnamonId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('cinnamon')).toBeDefined();
  });
});
