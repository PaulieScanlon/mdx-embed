import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Replit } from './';

describe('<Snack />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const repl = '@ritza/demo-embed';
    render(<Replit repl={repl} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('replit-embed')).toBeDefined();
  });

  test('it renders the lite mode', () => {
    const repl = '@ritza/demo-embed';
    render(<Replit repl={repl} mode="lite" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('replit-lite')).toBeDefined();
  });
});
