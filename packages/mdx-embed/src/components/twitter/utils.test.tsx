import React from 'react';
import { render, act } from '@testing-library/react';

import { Tweet } from './';
import { twttrClassNames, handleTwttrLoad } from './utils';

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

describe('handleTwttrLoad', () => {
  test('it calls createScriptTag when twitter class names are found', () => {
    const twttrDiv = document.createElement('div');
    twttrDiv.setAttribute('class', twttrClassNames.split(',').join(' ').replace(/\./g, ' '));
    document.body.appendChild(twttrDiv);

    expect(handleTwttrLoad().status).toEqual('createScriptTag');
  });

  test('it calls twttrLoad when no twitter class names are found', () => {
    expect(handleTwttrLoad().status).toEqual('twttrLoad');
  });
});
