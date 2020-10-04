import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Twitch } from './';

const PARENT_PROP = 'http://localhost:6006/';

describe('<Twitch />', () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
  });

  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  });

  test('it renders the component when provided a twitchId', () => {
    render(<Twitch parent={PARENT_PROP} twitchId="679474192" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitch')).toBeDefined();
  });

  test('it renders the component when provided a channel', () => {
    render(<Twitch parent={PARENT_PROP} channel="jlengstorf" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitch')).toBeDefined();
  });

  test('it renders the component when provided a collection', () => {
    render(<Twitch parent={PARENT_PROP} collection="eMybriFryRWpiQ" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitch')).toBeDefined();
  });
});
