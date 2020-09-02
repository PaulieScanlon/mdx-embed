import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleInstagrmLoad } from './utils';
export const Instagram = ({ instagramId }) =>
  React.createElement(
    GeneralObserver,
    { onEnter: () => handleInstagrmLoad() },
    React.createElement(
      'blockquote',
      { className: 'instagram-media instagram-mdx-embed', 'data-instgrm-version': '12' },
      React.createElement(
        'a',
        { href: `https://instagram.com/p/${instagramId}` },
        typeof window !== 'undefined' && !window.instgrm ? 'Loading' : '',
      ),
    ),
  );
