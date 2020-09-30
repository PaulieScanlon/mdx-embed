import React, { FunctionComponent } from "react";
import { GeneralObserver } from "../general-observer";

export interface IBuzzproutProps {
  /* Buzzprout id: podcastId/episodeId`*/
  buzzproutId: string,
  /* width of the iframe: default to 100% */
  width?: string,
  /* height of the iframe: default to 200px */
  height?: string
}

export const Buzzprout: FunctionComponent<IBuzzproutProps> = (
  { buzzproutId, width = "100%", height = "200" }: IBuzzproutProps
) => {
  const regex = /^\d{7}\/\d{7}-[\w|\W]+/;
  if (!regex.test(buzzproutId)) {
    return null;
  }
  return (
    <GeneralObserver>
      <div style={{ position: "relative" }}>
        <iframe
          title={`buzzprout-${buzzproutId}`}
          src={
            `https://www.buzzsprout.com/${buzzproutId}?client_source=admin&amp;iframe=true`
          }
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </GeneralObserver>
  );
};
