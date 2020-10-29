import React from 'react';

describe('utils', () => {
  beforeEach(() => {
    (window as any).addTwttr();
  });

  test('it calls twttr', () => {
    // (window as any).twttr.widgets.load = jest.fn();

    console.log((window as any).twttr());
  });
});
