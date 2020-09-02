import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleTikTokLoad } from './utils';
export const TikTok = ({ tikTokId }) => {
  return React.createElement(
    GeneralObserver,
    { onEnter: () => handleTikTokLoad() },
    React.createElement(
      'blockquote',
      {
        className: 'tiktok-embed',
        cite: `https://www.tiktok.com/${tikTokId}`,
        'data-video-id': tikTokId.split('/').pop(),
      },
      React.createElement(
        'section',
        null,
        React.createElement(
          'a',
          { href: `https://tiktok.com/${tikTokId}` },
          typeof window !== 'undefined' && !window.tiktok ? 'Loading' : '',
        ),
      ),
    ),
  );
};
