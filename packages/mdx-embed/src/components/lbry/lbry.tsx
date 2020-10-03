import React, { FunctionComponent } from 'react';
import { getPadding } from '../../utils';
import { GeneralObserver } from '../general-observer';

export interface ILbryProps {
  /** Lbry id */
  lbryId: string;
  /** Skip to a time in the video */
  skipTo?: {
    s: number;
  };
}

export const Lbry: FunctionComponent<ILbryProps> = ({ lbryId, skipTo = { s: 0 } }: ILbryProps) => {
  const { s } = skipTo;

  return (
    <GeneralObserver>
      <div
        className="lbry-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          data-testid="lbry"
          title={`lbry-${lbryId}`}
          src={`https://lbry.tv/$/embed/${lbryId}?t=${s}`}
          frameBorder="0"
          allow="fullscreen"
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
