import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Buzzsprout } from './';

describe('<Buzzsprout />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const buzzsproutId = '1081172/5581075-overview-de-algunos-modernos-lenguajes-de-programacion';
    render(<Buzzsprout buzzsproutId={buzzsproutId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('buzzsprout')).toBeDefined();
  });
  test('it not render the component with wrong id', () => {
    const buzzsproutId = '1172/5581075-some-text';
    render(<Buzzsprout buzzsproutId={buzzsproutId} />);
    expect(screen.queryByTestId('buzzsprout')).toBeNull();
  });
});
