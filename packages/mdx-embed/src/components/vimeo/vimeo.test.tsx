import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Vimeo } from './';

describe('<Vimeo />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component when provided a vimeoId', () => {
    render(<Vimeo vimeoId="38445453" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('vimeo')).toBeDefined();
  });

  test('it sets the autoplay property in the vimeo iframe src when autoplay is true', () => {
    const vimeoId = '38445453';
    render(<Vimeo vimeoId={vimeoId} autoPlay />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTitle(`vimeo-${vimeoId}`);
    expect(iframe).toHaveAttribute('src', expect.stringContaining('autoplay=true'));
  });

  test('it sets the time property in the vimeo iframe src when skipTo is present', () => {
    const vimeoId = '38445453';
    const skipTo = { h: 0, m: 1, s: 40 };
    render(<Vimeo vimeoId={vimeoId} skipTo={skipTo} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTitle(`vimeo-${vimeoId}`);
    expect(iframe).toHaveAttribute('src', expect.stringContaining(`#t=${skipTo.h}h${skipTo.m}m${skipTo.s}s`));
  });
});
