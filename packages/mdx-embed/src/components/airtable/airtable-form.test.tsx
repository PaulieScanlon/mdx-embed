import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { AirtableForm } from './';

describe('<AirtableForm />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component when provided a airtableFormId', () => {
    render(<AirtableForm airtableFormId="shr0dHXnGG9IA2xDc" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('airtable-form')).toBeDefined();
  });
});
