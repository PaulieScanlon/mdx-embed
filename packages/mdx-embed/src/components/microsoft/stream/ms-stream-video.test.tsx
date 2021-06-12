import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MsStreamVideo } from '.';

const videoId = '6ca9498c-c4f6-4bd5-99cc-2a44aabc3098';

describe('<MsStreamVideo />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component when provided a video id', () => {
    render(<MsStreamVideo videoId={videoId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTestId(`ms-stream-video`);
    expect(iframe).toBeDefined();
  });

  test('it sets the autoplay property in the stream iframe src when autoplay is true', () => {
    render(<MsStreamVideo videoId={videoId} autoPlay={true} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTestId(`ms-stream-video`);
    expect(iframe).toHaveAttribute('src', expect.stringContaining('autoplay=true'));
  });

  test('it sets the st property in the stream iframe src when skipTo is present', () => {
    const skipTo = { h: 0, m: 1, s: 40 };
    render(<MsStreamVideo videoId={videoId} skipTo={skipTo} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTestId(`ms-stream-video`);
    expect(iframe).toHaveAttribute('src', expect.stringContaining(`st=100`));
  });
  test('it sets the showinfo property in the stream iframe src to true by default', () => {
    render(<MsStreamVideo videoId={videoId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTestId(`ms-stream-video`);
    expect(iframe).toHaveAttribute('src', expect.stringContaining(`showinfo=true`));
  });
  test('it sets the showinfo property in the stream iframe src to false when specified as such', () => {
    render(<MsStreamVideo videoId={videoId} showInfo={false} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTestId(`ms-stream-video`);
    expect(iframe).toHaveAttribute('src', expect.stringContaining(`showinfo=false`));
  });
});