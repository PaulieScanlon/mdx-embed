import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../GeneralObserver';
export interface IFlickrProps {
  /** Flickr image link*/
  flickrLink: string;
}

export const Flickr: FunctionComponent<IFlickrProps> = ({ flickrLink }: IFlickrProps) => (
  <GeneralObserver>
    <span className="flickr-embed-mdx" data-flickr-embed="true" data-header="true" data-footer="true">
      <img src={`https://live.staticflickr.com/${flickrLink}`} width="100%" height="auto" alt={flickrLink} />
    </span>
  </GeneralObserver>
);
