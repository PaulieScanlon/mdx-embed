import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { TwitterHashtagButton } from './';

describe('<TwitterHashtagButton />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<TwitterHashtagButton hashtag="mdx-embed" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitter-hashtag-button')).toBeDefined();
  });
});
