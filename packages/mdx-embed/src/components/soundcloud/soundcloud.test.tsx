import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SoundCloud } from './';

describe('<SoundCloud />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component when provided a soundCloudLink', () => {
    render(<SoundCloud soundCloudLink="tracks/499997862" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('soundcloud')).toBeDefined();
  });

  test('it renders the component with color defined', () => {
    render(<SoundCloud soundCloudLink="tracks/188189839" color="e23f88" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const soundCloud = screen.getByTestId('soundcloud');

    expect(soundCloud).toBeDefined();
    expect(soundCloud).toHaveAttribute('src', expect.stringContaining('e23f88'));
  });

  test('it renders the component with visual artwork', () => {
    render(<SoundCloud soundCloudLink="tracks/196287837" visual={true} width="300px" height="300px" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const soundCloud = screen.getByTestId('soundcloud');

    expect(soundCloud).toBeDefined();
    expect(soundCloud).toHaveAttribute('src', expect.stringContaining('visual=true'));
    expect(soundCloud).toHaveAttribute('height', expect.stringContaining('300px'));
    expect(soundCloud).toHaveAttribute('width', expect.stringContaining('300px'));
  });
});
