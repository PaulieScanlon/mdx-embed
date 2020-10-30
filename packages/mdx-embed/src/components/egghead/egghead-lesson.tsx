import React, { FunctionComponent } from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';

export interface IEggheadLessonProps {
  /** Egghead lesson */
  lessonId: string;
}

export const EggheadLesson: FunctionComponent<IEggheadLessonProps> = ({ lessonId }: IEggheadLessonProps) => {
  return (
    <GeneralObserver>
      <div
        className="egghead-lesson-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          data-testid="egghead-lesson"
          title={`egghead-${lessonId}`}
          src={`https://egghead.io/lessons/${lessonId}/embed`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </GeneralObserver>
  );
};
