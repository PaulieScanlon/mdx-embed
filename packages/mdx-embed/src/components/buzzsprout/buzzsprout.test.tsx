import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Buzzsprout } from './';

describe('<Buzzsprout />', () => {
  test('it renders the component', () => {
    const buzzsproutId = '1081172/5581075-overview-de-algunos-modernos-lenguajes-de-programacion';
    render(<Buzzsprout buzzsproutId={buzzsproutId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('buzzsprout')).toBeDefined();
  });
});
