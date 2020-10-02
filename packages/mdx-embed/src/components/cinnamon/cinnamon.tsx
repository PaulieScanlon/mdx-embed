import React, { FunctionComponent } from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';

export interface ICinnamonProps {
  /** Cinnamon id */
  cinnamonId: string;
}

export const Cinnamon: FunctionComponent<ICinnamonProps> = ({ cinnamonId }: ICinnamonProps) => {
  return (
    <GeneralObserver>
      <div
        className="cinnamon-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          data-testid="cinnamon"
          src={`https://cinnamon.video/embed?v=${cinnamonId}`}
          frameBorder="0"
          allow="monetization; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
