import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';
import { handleLinkedInLoad } from './utils';
export interface ILinkedInProps {
  /** LinkedIn username */
  username: string;
  /** The type of badge */
  badgeType?: 'horizontal' | 'vertical';
  /** The size of the badge */
  badgeSize?: 'medium' | 'large';
  /** The badge theme */
  theme?: 'light' | 'dark';
  /** data-locale */
  locale?: string;
}

export const LinkedInBadge: FunctionComponent<ILinkedInProps> = ({
  username,
  badgeType = 'vertical',
  badgeSize = 'medium',
  theme = 'light',
  locale = 'en_US',
}: ILinkedInProps) => (
  <GeneralObserver onEnter={() => handleLinkedInLoad()}>
    <div
      data-testid="linkedin-badge"
      className="LI-profile-badge linkedin-badge-embed-mdx"
      data-version="v1"
      data-size={badgeSize}
      data-locale={locale}
      data-type={badgeType}
      data-theme={theme}
      data-vanity={username}
    >
      <a className="LI-simple-link" href={`https://uk.linkedin.com/in/${username}?trk=profile-badge`}>
        Loading
      </a>
    </div>
  </GeneralObserver>
);
