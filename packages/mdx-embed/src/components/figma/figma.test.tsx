import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Figma } from './';

describe('<Figma />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<Figma title="Boop" url="file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('figma')).toBeDefined();
  });

  test('it has 100% width', () => {
    render(<Figma title="Boop" url="file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const style = window.getComputedStyle(screen.queryAllByTestId('figma')[0]);

    expect(style.width).toEqual('100%');
  });
});
