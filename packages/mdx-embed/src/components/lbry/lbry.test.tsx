import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { Lbry } from '.';

describe('<Lbry />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const lbryId = 'get-wordpress-data-into-the-gatsby';
    render(<Lbry lbryId={lbryId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('lbry')).toBeDefined();
  });
});
