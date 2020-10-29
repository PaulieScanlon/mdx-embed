import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utils';
export interface IPinProps {
  /** Pinterest id */
  pinId: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
}

export const Pin: FunctionComponent<IPinProps> = ({ pinId, size = 'small' }: IPinProps) => (
  <GeneralObserver onEnter={() => handlePinterestBuild()}>
    <a
      className="pinterest-pin pinterest-pin-mdx-embed"
      data-testid="pin"
      data-pin-do="embedPin"
      data-pin-width={size}
      href={`https://www.pinterest.com/pin/${pinId}`}
    />
  </GeneralObserver>
);
