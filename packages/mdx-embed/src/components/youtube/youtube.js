import React from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';
export const YouTube = ({ youTubeId, aspectRatio = '16:9', autoPlay = false, skipTo = { h: 0, m: 0, s: 0 } }) => {
  const { h, m, s } = skipTo;
  const tH = h * 60;
  const tM = m * 60;
  const startTime = tH + tM + s;
  return React.createElement(
    GeneralObserver,
    null,
    React.createElement(
      'div',
      {
        className: 'youtube-mdx-embed',
        style: {
          position: 'relative',
          width: '100%',
          ...getPadding(aspectRatio),
        },
      },
      React.createElement('iframe', {
        title: `youTube-${youTubeId}`,
        src: `https://www.youtube.com/embed/${youTubeId}?&autoplay=${autoPlay}&start=${startTime}`,
        frameBorder: '0',
        allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
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
