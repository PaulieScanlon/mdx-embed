import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Twitch } from './';

describe('<Twitch />', () => {
  test('it renders the component', () => {
    render(<Twitch twitchId="679474192" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitch')).toBeDefined();
  });
});
