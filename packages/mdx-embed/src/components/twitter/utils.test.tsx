import React from 'react';
import { render, act } from '@testing-library/react';

import { Tweet } from './';

describe('utils', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it calls twttr.widgets.load', () => {
    render(<Tweet tweetLink="PaulieScanlon/status/1232982448310497286" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect((window as any).twttr.widgets.load).toBeCalledTimes(1);
  });
});
