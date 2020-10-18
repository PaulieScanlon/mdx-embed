import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utils';
export interface IPinterestFollowButtonProps {
  /** Pinterest username */
  username: string;
}

export const PinterestFollowButton: FunctionComponent<IPinterestFollowButtonProps> = ({
  username,
}: IPinterestFollowButtonProps) => (
  <GeneralObserver onEnter={() => handlePinterestBuild()}>
    <a
      className="pinterest-follow-button pinterest-follow-button-mdx-embed"
      data-testid="pinterest-follow-button"
      data-pin-do="buttonFollow"
      href={`https://www.pinterest.com/${username}/`}
    >
      {`Follow @${username}`}
    </a>
  </GeneralObserver>
);
