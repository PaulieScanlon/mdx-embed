import React from 'react';
import { GeneralObserver } from '../general-observer';
export const Strava = ({ activityId }) => {
  return React.createElement(
    GeneralObserver,
    null,
    React.createElement(
      'div',
      {
        className: 'strava-mdx-embed',
        style: {
          position: 'relative',
          height: '350px',
          maxWidth: '568px',
          width: '100%',
          overflow: 'auto',
        },
      },
      React.createElement('iframe', {
        title: `strava-${activityId}`,
        className: 'strava-mdx-embed',
        height: '100%',
        width: '100%',
        style: {
          minWidth: '380px',
        },
        frameBorder: '0',
        scrolling: 'no',
        src: `https://www.strava.com/activities/${activityId}`,
      }),
    ),
  );
};
