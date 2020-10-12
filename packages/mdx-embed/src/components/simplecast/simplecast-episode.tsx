import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface ISimplecastEpisodeProps {
  /** Simplecast Episode */
  episodeId: string;
  /** Color theme of the Player */
  theme?: `light` | `dark`;
}

export const SimplecastEpisode: FunctionComponent<ISimplecastEpisodeProps> = ({
  episodeId,
  theme = `light`,
}: ISimplecastEpisodeProps) => {
  return (
    <GeneralObserver>
      <div
        className="simplecast-episode-mdx-embed"
        style={{
          position: 'relative',
          height: '200px',
          width: '100%',
        }}
      >
        <iframe
          data-testid="simplecast-episode"
          title={`simplecast-${episodeId}`}
          src={`https://player.simplecast.com/${episodeId}${theme === `dark` ? `?dark=true` : ``}`}
          frameBorder="no"
          scrolling="no"
          seamless
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
