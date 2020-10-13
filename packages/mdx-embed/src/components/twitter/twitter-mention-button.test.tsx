import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { TwitterMentionButton } from './';

describe('<TwitterMentionButton />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<TwitterMentionButton username="PaulieScanlon" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitter-mention-button')).toBeDefined();
  });
});
