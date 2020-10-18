import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

function getPadding(aspectRatio: string) {
  const regExp = /^([1-9]\d*):([1-9]\d*)$/;
  const [, width, height] = regExp.exec(aspectRatio) || ['', '1', '1'];

  return {
    paddingTop: `${(100 * parseInt(height, 10)) / parseInt(width, 10)}%`,
  };
}

export interface IWhimsicalProps {
  /**
   * Whimsical id. Ex:
   * - given a public URL: https://whimsical.com/Py4kdjbPzFpRoAPMbUxmaN
   * - diagramId will be: Py4kdjbPzFpRoAPMbUxmaN
   */
  diagramId: string;

  /**
   * Aspect ratio of Whimsical diagram
   */
  aspectRatio?: string;
}

export const Whimsical: FunctionComponent<IWhimsicalProps> = ({ diagramId, aspectRatio = '1:1' }: IWhimsicalProps) => (
  <GeneralObserver>
    <div
      data-testid="whimsical"
      className="whimsical-mdx-embed"
      style={{
        position: 'relative',
        width: '100%',
        ...getPadding(aspectRatio),
      }}
    >
      <iframe
        title={`whimsical-${diagramId}`}
        src={`https://whimsical.com/embed/${diagramId}`}
        frameBorder="0"
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
