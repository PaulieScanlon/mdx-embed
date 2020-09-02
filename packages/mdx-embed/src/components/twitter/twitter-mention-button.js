import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utils';
export const TwitterMentionButton = ({ username, size = 'small' }) =>
  React.createElement(
    GeneralObserver,
    { onEnter: () => handleTwttrLoad() },
    React.createElement(
      'a',
      {
        href: `https://twitter.com/intent/tweet?screen_name=${username}&ref_src=twsrc%5Etfw`,
        className: 'twitter-mention-button twitter-mention-button-mdx-embed',
        'data-size': size,
      },
      `Tweet to @${username}`,
    ),
  );
