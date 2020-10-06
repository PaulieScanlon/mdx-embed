import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Spotify } from './';

describe('<Spotify />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<Spotify spotifyLink="album/65KwtzkJXw7oT819NFWmEP" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('spotify')).toBeDefined();
  });
});
