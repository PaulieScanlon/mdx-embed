import React from 'react';
import { GeneralObserver } from '../general-observer';
export const SimplecastEpisode = ({ episodeId, theme = `light` }) => {
  return React.createElement(
    GeneralObserver,
    null,
    React.createElement(
      'div',
      {
        className: 'simplecast-episode-mdx-embed',
        style: {
          position: 'relative',
          height: '200px',
          width: '100%',
        },
      },
      React.createElement('iframe', {
        title: `simplecast-${episodeId}`,
        src: `https://player.simplecast.com/${episodeId}${theme === `dark` ? `?dark=true` : ``}`,
        frameBorder: 'no',
        scrolling: 'no',
        seamless: true,
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
