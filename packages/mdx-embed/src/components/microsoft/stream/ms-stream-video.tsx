import React, { FunctionComponent } from 'react';
import { getPadding } from '../../../utils';
import { GeneralObserver } from '../../general-observer';

export interface IMsStreamVideoProps {
  /** Stream Video Id */
  videoId: string;
  /** Aspect ratio of the video */
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | '8:5';
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Auto play the video */
  autoPlay?: boolean;
  /** Show info like video title in overlay */
  showInfo?: boolean;
}

export const MsStreamVideo: FunctionComponent<IMsStreamVideoProps> = ({
  videoId,
  aspectRatio = '16:9',
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
  showInfo = true,
}: IMsStreamVideoProps) => {
  const { h, m, s } = skipTo;

  const tH = h! * 60;
  const tM = m * 60;

  const startTime = tH + tM + s;

  return (
    <GeneralObserver>
      <div
        className="ms-stream-video-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(aspectRatio),
        }}
      >
        <iframe
          data-testid="ms-stream-video"
          title={`ms-stream-video-${videoId}`}
          src={`https://web.microsoftstream.com/embed/video/${videoId}?autoplay=${autoPlay}&showinfo=${showInfo}&st=${startTime}`}
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
