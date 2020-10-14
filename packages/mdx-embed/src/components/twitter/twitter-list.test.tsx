import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { TwitterList } from './';

describe('<TwitterList />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<TwitterList username="PaulieScanlon" listName="ask-gatsby" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitter-list')).toBeDefined();
  });
});
