import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { CodePen } from './';

describe('<CodePen />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<CodePen codePenId="PNaGbb" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('codepen')).toBeDefined();
  });

  test('it has 100% width', () => {
    render(<CodePen codePenId="PNaGbb" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const style = window.getComputedStyle(screen.queryAllByTestId('codepen')[0]);

    expect(style.width).toEqual('100%');
  });
});
