import React, { FunctionComponent, useEffect } from 'react';
import { createScriptTag, getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';
import { handleWistiaLoad } from './utils';

export interface IWistiaProps {
  /** Video ID, extracted from Wistia URL. */
  videoId: string;
  /** Enable player's "full screen" control. */
  allowFullScreen?: boolean;
  /** Video player's width, set to 100% (default) for responsive, or exact value for fixed (eg. "640px"). */
  width?: string;
  /** Video player's height, set to 100% (default) for responsive, or exact value for fixed (eg. "380px"). */
  height?: string;
  /** Aspect ratio of the video, used to calculate padding offset. */
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | '8:5';
  /** Auto play video when component renders. */
  autoPlay?: boolean;
}

export const Wistia: FunctionComponent<IWistiaProps> = ({
  videoId,
  allowFullScreen = true,
  aspectRatio = '16:9',
  width = '100%',
  height = '100%',
  autoPlay = false,
}: IWistiaProps) => {
  // Implemented as config array to support further extension
  const config = [];
  if (autoPlay) config.push('autoPlay=true');

  useEffect(() => {
    handleWistiaLoad();
  }, []);

  return (
    <GeneralObserver>
      <div
        className="wistia-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(aspectRatio),
        }}
      >
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${videoId}${config.length > 0 ? '?' + config.join('&') : ''}`}
          data-testid="wistia"
          allow={`autoplay; ${allowFullScreen ? 'fullscreen' : ''}`}
          frameBorder="0"
          scrolling="no"
          className="wistia-mdx-embed-iframe"
          allowFullScreen={allowFullScreen}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: width,
            height: height,
          }}
        ></iframe>
      </div>
    </GeneralObserver>
  );
};
