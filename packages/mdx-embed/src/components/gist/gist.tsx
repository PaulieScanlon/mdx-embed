import React, { FunctionComponent, useEffect, useState } from 'react';
import { createScriptTag, createStyleSheet } from '../../utils';
import { GeneralObserver } from '../general-observer';

export interface IGistProps {
  /** Gist link */
  gistLink: string;
}

interface IGistState {
  /** Loading status */
  isLoading: boolean;
  /** HTML response from api  */
  div?: string;
  /** The file name of the Gist*/
  file?: string;
}

export const Gist: FunctionComponent<IGistProps> = ({ gistLink }: IGistProps) => {
  const [gistResponse, setGistResponse] = useState<IGistState>({
    isLoading: true,
    div: '',
    file: '',
  });

  const root = `https://gist.github.com/`;
  const gistId = gistLink.split('/')[1];
  const gistEmbedScript = `${root}${gistLink}.json?callback=gist_callback_${gistId}`;

  useEffect(() => {
    (window as any)[`gist_callback_${gistId}`] = (gist: any) => {
      createStyleSheet(gist.stylesheet);
      setGistResponse({
        isLoading: false,
        div: gist.div,
        file: gist.files[0],
      });
    };
    createScriptTag(gistEmbedScript, null);
  }, [gistId, gistEmbedScript]);

  return (
    <GeneralObserver>
      {!gistResponse.isLoading && (
        <div data-testid="gist" className="gist-mdx-embed" dangerouslySetInnerHTML={{ __html: gistResponse.div! }} />
      )}
    </GeneralObserver>
  );
};
