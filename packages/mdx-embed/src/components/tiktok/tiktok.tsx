import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';
import { handleTikTokLoad } from './utils';
export interface ITikTokProps {
  /** TikTok id */
  tikTokId: string;
}

export const TikTok: FunctionComponent<ITikTokProps> = ({ tikTokId }: ITikTokProps) => {
  return (
    <GeneralObserver onEnter={() => handleTikTokLoad()}>
      <blockquote
        data-testid="tiktok"
        className="tiktok-embed"
        cite={`https://www.tiktok.com/${tikTokId}`}
        data-video-id={tikTokId.split('/').pop()}
      >
        <section>
          <a href={`https://tiktok.com/${tikTokId}`}>
            {typeof window !== 'undefined' && !(window as any).tiktok ? 'Loading' : ''}
          </a>
        </section>
      </blockquote>
    </GeneralObserver>
  );
};
