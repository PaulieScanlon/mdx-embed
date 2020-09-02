import React from 'react';
import { GeneralObserver } from '../general-observer';
export const Buzzprout = ({ buzzproutId }) => {
  return React.createElement(
    GeneralObserver,
    null,
    React.createElement(
      'div',
      { style: { position: 'relative' } },
      React.createElement('iframe', {
        title: `buzzprout-${buzzproutId}`,
        src: `https://www.buzzsprout.com/${buzzproutId}?client_source=admin&amp;iframe=true`,
        width: '100%',
        height: '200',
        frameBorder: '0',
        scrolling: 'no',
      }),
    ),
  );
};
