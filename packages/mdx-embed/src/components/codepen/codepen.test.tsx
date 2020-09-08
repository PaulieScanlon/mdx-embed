import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '../../test/jest/__mocks__/intersection-observer';

import { CodePen } from './';

describe('<CodePen />', () => {
  test('it renders the component', () => {
    render(<CodePen codePenId="PNaGbb" />);

    const observerCallback = (window as any).IntersectionObserver.mock.calls[0][0];

    act(() => {
      observerCallback([{ intersectionRatio: 1 }]);
      return undefined;
    });

    expect(screen.getByTestId('codepen')).toBeDefined();
  });
});
