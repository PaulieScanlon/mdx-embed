import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { Tweet } from './';

describe('<Tweet />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<Tweet tweetLink="PaulieScanlon/status/1232982448310497286" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitter-tweet')).toBeDefined();
  });
});
