import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';
import { handleInstagrmLoad } from './utils';
export interface IInstagramProps {
  /** Instagram id */
  instagramId: string;
}

export const Instagram: FunctionComponent<IInstagramProps> = ({ instagramId }: IInstagramProps) => (
  <GeneralObserver onEnter={() => handleInstagrmLoad()}>
    <blockquote data-testid="instagram" className="instagram-media instagram-mdx-embed" data-instgrm-version="12">
      <a href={`https://instagram.com/p/${instagramId}`}>
        {typeof window !== 'undefined' && !(window as any).instgrm ? 'Loading' : ''}
      </a>
    </blockquote>
  </GeneralObserver>
);
