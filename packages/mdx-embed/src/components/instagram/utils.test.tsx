import React from 'react';
import { render, act } from '@testing-library/react';

import { Instagram } from './';
import { instgrmClassNames, handleInstagrmLoad } from './utils';

describe('utils', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it calls instgrm.Embeds.process', () => {
    render(<Instagram instagramId="B7ISOoHne6s" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect((window as any).instgrm.Embeds.process).toBeCalledTimes(1);
  });
});

describe('handleInstagrmLoad', () => {
  test('it calls createScriptTag when instagram class names are found', () => {
    const instgrmDiv = document.createElement('div');
    instgrmDiv.setAttribute('class', instgrmClassNames.split(',').join(' ').replace(/\./g, ' '));
    document.body.appendChild(instgrmDiv);

    expect(handleInstagrmLoad().status).toEqual('createScriptTag');
  });

  test('it calls instgrmProcess when no instagram class names are found', () => {
    expect(handleInstagrmLoad().status).toEqual('instgrmProcess');
  });
});
