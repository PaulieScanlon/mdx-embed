import { render, screen, waitFor } from '@testing-library/react';
import React, { act } from 'react';

import { Gist } from './';

describe('<Gist />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', async () => {
    const gistLink = 'PaulieScanlon/ca0cc9239176066492cb2aba435edbf7';
    render(<Gist gistLink={gistLink} />);
    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });
    waitFor(() => expect(screen.getByTestId('gist')).toBeDefined());
  });
});
