import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utils';
export const PinterestFollowButton = ({ username }) =>
  React.createElement(
    GeneralObserver,
    { onEnter: () => handlePinterestBuild() },
    React.createElement(
      'a',
      {
        className: 'pinterest-follow-button pinterest-follow-button-mdx-embed',
        'data-pin-do': 'buttonFollow',
        href: `https://www.pinterest.com/${username}/`,
      },
      `Follow @${username}`,
    ),
  );
