import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';
export interface IStravaProps {
  /** The Strava activityId */
  activityId: string;
}

export const Strava: FunctionComponent<IStravaProps> = ({ activityId }: IStravaProps) => {
  return (
    <GeneralObserver>
      <div
        data-testid="strava"
        className="strava-mdx-embed"
        style={{
          position: 'relative',
          height: '350px',
          maxWidth: '568px',
          width: '100%',
          overflow: 'auto',
        }}
      >
        <iframe
          title={`strava-${activityId}`}
          className="strava-mdx-embed"
          height="100%"
          width="100%"
          style={{
            minWidth: '380px',
          }}
          frameBorder="0"
          scrolling="no"
          src={`https://www.strava.com/activities/${activityId}`}
        />
      </div>
    </GeneralObserver>
  );
};
