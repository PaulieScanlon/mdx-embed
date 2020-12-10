import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IFigmaProps {
  /** Height for the iFrame. Defaults to 450px */
  height?: number;
  /**
   * A title for your embed which is used for the iframe
   */
  title: string;
  /**
   * The url to the file or frame
   */
  url: string;
}

export const Figma: FunctionComponent<IFigmaProps> = ({
  title,
  height = 450,
  url
}: IFigmaProps) => (
  <GeneralObserver height={height}>
    <iframe
      data-testid="figma"
      title={`figma-${title}`}
      className="figma-mdx-embed"
      height={height}
      style={{
        width: '100%',
      }}
      scrolling="no"
      src={`https://www.figma.com/embed?embed_host=mdx-embed&url=${url}`}
      frameBorder="no"
      allowFullScreen
    />
  </GeneralObserver>
);

// https://www.figma.com/file/gywqAn9uh3J2vjwcfIOdVr/Crystallize-Content-Modeling-Kit?node-id=0%3A1