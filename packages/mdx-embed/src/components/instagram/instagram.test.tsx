import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { Instagram } from './';

describe('<Instagram />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const instagramId = 'CFxh07rFBlQ';
    render(<Instagram instagramId={instagramId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('instagram')).toBeDefined();
  });
});
