import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleFlickrLoad } from './utils';
export const Flickr = ({ flickrLink }) =>
  React.createElement(
    GeneralObserver,
    { onEnter: () => handleFlickrLoad() },
    React.createElement(
      'span',
      { className: 'flickr-embed-mdx', 'data-flickr-embed': 'true', 'data-header': 'true', 'data-footer': 'true' },
      React.createElement('img', {
        src: `https://live.staticflickr.com/${flickrLink}`,
        width: '100%',
        height: 'auto',
        alt: flickrLink,
      }),
    ),
  );
