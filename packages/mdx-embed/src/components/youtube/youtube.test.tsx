import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { YouTube } from '.';

describe('<YouTube />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component when provided a youTubeId', () => {
    render(<YouTube youTubeId="mM5_T-F1Yn4" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('youtube')).toBeDefined();
  });

  test('it renders the component when provided a listId', () => {
    render(<YouTube youTubePlaylistId="PL5SvzogSTpeH1Szqw4tPi9ZfgXDbY8GU-" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('youtube')).toBeDefined();
  });

  test.only('it renders the component skipTo defined', () => {
    render(<YouTube youTubeId="PS2784YfPpw" skipTo={{ h: 0, m: 38, s: 44 }} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const youTube = screen.getByTestId('youtube');

    expect(youTube).toBeDefined();
    expect(youTube).toHaveAttribute('src', expect.stringContaining('start=2324'));
  });

  test('it renders the component autoplay defined', () => {
    render(<YouTube youTubeId="PS2784YfPpw" autoPlay={true} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const youTube = screen.getByTestId('youtube');

    expect(youTube).toBeDefined();
    expect(youTube).toHaveAttribute('src', expect.stringContaining('autoplay=true'));
  });

  test('it renders the component using NoCookie provider', () => {
    render(<YouTube youTubeId="PS2784YfPpw" noCookie={true} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const youTube = screen.getByTestId('youtube');

    expect(youTube).toBeDefined();
    expect(youTube).toHaveAttribute('src', expect.stringContaining('www.youtube-nocookie.com'));
  });
});
