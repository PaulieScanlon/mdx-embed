import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { GeneralObserver } from './';

describe('<GeneralObserver />', () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
  });

  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  });

  test('it renders the component', () => {
    render(
      <GeneralObserver>
        <div />
      </GeneralObserver>,
    );

    expect(screen.getByTestId('general-observer')).toBeDefined();
  });

  test("it renders it's children", () => {
    render(
      <GeneralObserver>
        <div data-testid="test-child">child</div>
      </GeneralObserver>,
    );

    expect(screen.queryAllByTestId('test-child')).toBeDefined();
  });

  test('it calls onEnter when in viewport', () => {
    const testOnEnter = jest.fn();

    render(
      <GeneralObserver onEnter={testOnEnter}>
        <div data-testid="test-child">child</div>
      </GeneralObserver>,
    );

    const observerCallback = (window as any).IntersectionObserver.mock.calls[0][0];

    act(() => {
      observerCallback([{ intersectionRatio: 1 }]);
      return undefined;
    });

    expect(testOnEnter).toHaveBeenCalledTimes(1);
  });
});
