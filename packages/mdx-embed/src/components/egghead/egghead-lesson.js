import React from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';
export const EggheadLesson = ({ lessonId }) => {
  return React.createElement(
    GeneralObserver,
    null,
    React.createElement(
      'div',
      {
        className: 'egghead-lesson-mdx-embed',
        style: {
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        },
      },
      React.createElement('iframe', {
        title: `egghead-${lessonId}`,
        src: `https://egghead.io/lessons/${lessonId}/embed`,
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
