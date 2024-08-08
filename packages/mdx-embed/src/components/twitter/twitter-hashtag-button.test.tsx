import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

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
