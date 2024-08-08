import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

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
