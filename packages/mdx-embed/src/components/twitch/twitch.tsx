import React, { FunctionComponent } from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';
import { constructTwitchURL } from './utils';

export interface ITwitchProps {
  /** Domain(s) that will be embedding Twitch. You must have one parent key for each domain your site uses. */
  parent: string;
  /** Twitch id */
  twitchId?: string;
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Auto play the video */
  autoPlay?: boolean;
  /** Name of the channel, for a live stream */
  channel?: string;
  /** Collection ID, for a collection of videos */
  collection?: string;
}

export const Twitch: FunctionComponent<ITwitchProps> = ({
  parent,
  twitchId,
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
  channel = '',
  collection = '',
}: ITwitchProps) => {
  const { h, m, s } = skipTo;
  const title = twitchId ? `twitch-${twitchId}` : `twitch`;
  const baseUrl = `https://player.twitch.tv/?autoplay=${autoPlay}&t=${h}h${m}m${s}s&parent=${
    process.env.NODE_ENV === 'development' ? 'localhost' : parent
  }`;
  const constructedSrcURL = constructTwitchURL(twitchId, channel, collection, baseUrl);

  return (
    <GeneralObserver>
      <div
        data-testid="twitch"
        className="twitch-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          title={title}
          src={constructedSrcURL}
          // src={`https://clips.twitch.tv/embed?clip=AlertProductiveStingrayNononoCat&parent=${parent}`}
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
