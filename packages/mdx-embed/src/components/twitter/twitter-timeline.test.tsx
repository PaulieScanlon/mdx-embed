import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

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
