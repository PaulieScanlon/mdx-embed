import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { Whimsical } from './';

describe('<Whimsical />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const diagramId = 'Py4kdjbPzFpRoAPMbUxmaN';
    render(<Whimsical diagramId={diagramId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('whimsical')).toBeDefined();
  });

  test('it renders the component with given aspectRatio', () => {
    const diagramId = 'Py4kdjbPzFpRoAPMbUxmaN';
    render(<Whimsical diagramId={diagramId} aspectRatio="4:3" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('whimsical')).toBeDefined();
  });
});
