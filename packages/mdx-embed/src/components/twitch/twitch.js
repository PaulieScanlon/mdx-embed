import React from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';
export const Twitch = ({
  parent,
  twitchId,
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
  channel = '',
  collection = '',
}) => {
  const { h, m, s } = skipTo;
  return React.createElement(
    GeneralObserver,
    null,
    React.createElement(
      'div',
      {
        className: 'twitch-mdx-embed',
        style: {
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        },
      },
      React.createElement('iframe', {
        title: `twitch-${twitchId}`,
        src: `https://player.twitch.tv/?autoplay=${autoPlay}&t=${h}h${m}m${s}s&video=v${twitchId}&channel=${channel}&collection=${collection}&parent=${parent}`,
        frameBorder: '0',
        allow: 'autoplay; fullscreen',
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
