import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { CodeSandbox } from './';

describe('<CodeSandbox />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const codeSandboxId = 'j0y0vpz59';
    render(<CodeSandbox codeSandboxId={codeSandboxId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('codesandbox')).toBeDefined();
  });
});
