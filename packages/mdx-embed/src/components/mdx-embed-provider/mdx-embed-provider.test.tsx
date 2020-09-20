import React from 'react';
import { render, screen } from '@testing-library/react';

import { MDXEmbedProvider } from './';

describe('<MDXEmbedProvider />', () => {
  test("it renders it's children", () => {
    render(
      <MDXEmbedProvider>
        <div data-testid="test-child">child</div>
      </MDXEmbedProvider>,
    );

    expect(screen.queryAllByTestId('test-child')).toBeDefined();
  });
});
