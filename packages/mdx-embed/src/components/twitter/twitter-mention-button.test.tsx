import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

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
