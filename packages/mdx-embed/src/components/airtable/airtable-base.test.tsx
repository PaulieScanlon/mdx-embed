import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { AirtableBase } from './';

describe('<AirtableBase />', () => {
  test('it renders the component when provided a airtableBaseId', () => {
    render(<AirtableBase airtableBaseId="shrVJbC9yrwSS18XZ" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('airtable-base')).toBeDefined();
  })
})