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
   * The url to the file or frame. Make sure to include the node-id if present
   */
  url: string;
}

export const Figma: FunctionComponent<IFigmaProps> = ({ title, height = 450, url }: IFigmaProps) => {
  const regex = /(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;
  if (!regex.test(url)) {
    return null;
  }
  return (
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
        src={`https://www.figma.com/embed?embed_host=mdx-embed&url=https://www.figma.com/${url}`}
        frameBorder="no"
        allowFullScreen
      />
    </GeneralObserver>
  );
};
