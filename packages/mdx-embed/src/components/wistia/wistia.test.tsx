import React from 'react';
import { render, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wistia } from './';

describe('<Wistia />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', async () => {
    render(<Wistia videoId={'yplqa7pg87'} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    await waitFor(() => expect(screen.getByTestId('wistia')).toBeDefined());
  });

  test('it allows full screen', async () => {
    render(<Wistia videoId={'yplqa7pg87'} allowFullScreen={true} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    await waitFor(() => {
      expect(screen.getByTestId('wistia')).toBeDefined();
      expect(screen.getByTestId('wistia')).toHaveAttribute('allow', 'autoplay; fullscreen');
      expect(screen.getByTestId('wistia')).toHaveAttribute('allowfullscreen');
    });
  });

  test('it has fixed size', async () => {
    render(<Wistia videoId={'yplqa7pg87'} width="640px" height="380px" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    await waitFor(() => {
      expect(screen.getByTestId('wistia')).toBeDefined();
      expect(screen.getByTestId('wistia')).toHaveAttribute(
        'style',
        'position: absolute; top: 0px; left: 0px; width: 640px; height: 380px;',
      );
    });
  });

  test('it appends autoplay prop', async () => {
    render(<Wistia videoId={'yplqa7pg87'} autoPlay={true} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    await waitFor(() => {
      expect(screen.getByTestId('wistia')).toBeDefined();
      expect(screen.getByTestId('wistia')).toHaveAttribute(
        'src',
        'https://fast.wistia.net/embed/iframe/yplqa7pg87?autoPlay=true',
      );
    });
  });
});
