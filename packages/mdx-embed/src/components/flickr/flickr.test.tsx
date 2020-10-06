import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Flickr } from './';

describe('<Flickr />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const flickrLink = '65535/50137099548_be9ddb10ce_b.jpg';
    render(<Flickr flickrLink={flickrLink} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('flickr')).toBeDefined();
  });
});
