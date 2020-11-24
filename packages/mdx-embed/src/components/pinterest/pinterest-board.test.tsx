import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { PinterestBoard } from './';

const pinterestLink = 'fromspacewithlove/astronauts/';

describe('<PinterestBoard />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<PinterestBoard pinterestLink={pinterestLink} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('pinterest-board')).toBeDefined();
  });

  test('it renders the component with given width', () => {
    render(<PinterestBoard pinterestLink={pinterestLink} width={600} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('pinterest-board')).toBeDefined();
  });

  test('it renders the component with given variant', () => {
    render(<PinterestBoard pinterestLink={pinterestLink} variant="user" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('pinterest-board')).toBeDefined();
  });
});
