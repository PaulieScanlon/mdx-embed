import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { TwitterTimeline } from './';

describe('<TwitterTimeline />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<TwitterTimeline username="PaulieScanlon" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitter-timeline')).toBeDefined();
  });
});
