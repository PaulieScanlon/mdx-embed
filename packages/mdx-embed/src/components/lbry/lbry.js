import React from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';
export const Lbry = ({ lbryId, skipTo = { s: 0 } }) => {
  const { s } = skipTo;
  return React.createElement(
    GeneralObserver,
    null,
    React.createElement(
      'div',
      {
        className: 'lbry-mdx-embed',
        style: {
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        },
      },
      React.createElement('iframe', {
        title: `lbry-${lbryId}`,
        src: `https://lbry.tv/$/embed/${lbryId}?t=${s}`,
        frameBorder: '0',
        allow: 'fullscreen',
        allowFullScreen: true,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }),
    ),
  );
};
