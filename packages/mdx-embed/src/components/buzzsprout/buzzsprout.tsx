import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IBuzzsproutProps {
  /* Buzzsprout id: podcastId/episodeId`*/
  buzzsproutId: string;
  /* width of the iframe: default to 100% */
  width?: string;
  /* height of the iframe: default to 200px */
  height?: string;
}

export const Buzzsprout: FunctionComponent<IBuzzsproutProps> = ({
  buzzsproutId,
  width = '100%',
  height = '200',
}: IBuzzsproutProps) => {
  const regex = /^\d{7}\/\d{7}-[\w|\W]+/;
  if (!regex.test(buzzsproutId)) {
    return null;
  }
  return (
    <GeneralObserver>
      <div style={{ position: 'relative' }}>
        <iframe
          data-testid="buzzsprout"
          className="buzzsprout-mdx-embed"
          title={`buzzsprout-${buzzsproutId}`}
          src={`https://www.buzzsprout.com/${buzzsproutId}?client_source=admin&amp;iframe=true`}
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </GeneralObserver>
  );
};
