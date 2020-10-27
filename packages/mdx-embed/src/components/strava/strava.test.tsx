import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Strava } from './';

describe('<Strava />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component when provided an activityId', () => {
    const activityId = '3857744534/embed/063fb45ce16095ff076c485ef6b14a01bf0e10e1';
    render(<Strava activityId={activityId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('strava')).toBeDefined();
  });

  test('it sets the correct activityId property in the strava iframe src', () => {
    const activityId = '3857744534/embed/063fb45ce16095ff076c485ef6b14a01bf0e10e1';
    render(<Strava activityId={activityId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    const iframe = screen.getByTitle(`strava-${activityId}`);
    expect(iframe).toHaveAttribute('src', expect.stringContaining(`activities/${activityId}`));
  });
});
