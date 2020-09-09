import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { CodePen } from './';

describe('<CodePen />', () => {
  test('it renders the component', () => {
    render(<CodePen codePenId="PNaGbb" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('codepen')).toBeDefined();
  });
});
