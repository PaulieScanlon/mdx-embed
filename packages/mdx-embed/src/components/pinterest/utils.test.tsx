import React from 'react';
import { render, act } from '@testing-library/react';

import { Pin } from '.';
import { pinterestClassNames, handlePinterestBuild } from './utils';

describe('utils', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it calls PinUtils.build', () => {
    render(<Pin pinId="637963103444140543" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect((window as any).PinUtils.build).toBeCalledTimes(1);
  });
});

describe('handlePinterestBuild', () => {
  test('it calls createScriptTag when pinterest class names are found', () => {
    const pinDiv = document.createElement('div');
    pinDiv.setAttribute('class', pinterestClassNames.split(',').join(' ').replace(/\./g, ' '));
    document.body.appendChild(pinDiv);

    expect(handlePinterestBuild().status).toEqual('createScriptTag');
  });

  test('it calls twttrLoad when no pinterest class names are found', () => {
    expect(handlePinterestBuild().status).toEqual('pinterestBuild');
  });
});
