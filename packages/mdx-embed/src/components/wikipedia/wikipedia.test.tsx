import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import React, { act } from 'react';

import { Wikipedia } from './';

describe('<Wikipedia />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
    fetchMock.enableMocks();
  });

  test('it renders the component', async () => {
    fetchMock.mockResponseOnce(async () => {
      return '<html><body>hello wikipedia !</body></html>';
    });
    render(<Wikipedia wikipediaLink={'Teenage_Mutant_Ninja_Turtles'} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    await waitFor(() => expect(screen.getByTestId('wikipedia')).toBeDefined());
  });
});
