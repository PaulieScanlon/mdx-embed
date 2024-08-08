import React, { FunctionComponent, useEffect, useState } from 'react';
import { GeneralObserver } from '../general-observer';
export interface IWikipediaProps {
  /** Wikipedia page link */
  wikipediaLink: string;
  /** Height for the iFrame */
  height?: number | string;
}

interface IWikipediaState {
  /** Loading status */
  isLoading: boolean;
  /** Error status */
  hasError: boolean;
  /** HTML response from api  */
  body?: string;
}

export const Wikipedia: FunctionComponent<IWikipediaProps> = ({ wikipediaLink, height = 600 }: IWikipediaProps) => {
  const [wikiResponse, setWikiResponse] = useState<IWikipediaState>({
    isLoading: true,
    hasError: false,
    body: '',
  });

  const wikipediaEmbedUrl = `https://en.wikipedia.org/api/rest_v1/page/html/${wikipediaLink}`;

  useEffect(() => {
    fetch(wikipediaEmbedUrl)
      .then((response) => response.text())
      .then((response) => {
        if (response) {
          const body = response
            .replace(/<a rel="mw:WikiLink"/g, '<a target="_blank" rel="mw:WikiLink"')
            .replace(/<a href="\/wiki\/"/g, '<a href="https://en.wikipedia.org/wiki/')
            .replace(/\/w\/load.php/g, 'https://en.wikipedia.org/w/');
          setWikiResponse({
            isLoading: false,
            hasError: false,
            body,
          });
        }

        if (!response) {
          setWikiResponse({
            isLoading: false,
            hasError: true,
          });
        }
      });
  }, [wikipediaEmbedUrl]);

  return (
    <GeneralObserver>
      {!wikiResponse.isLoading && (
        <iframe
          data-testid="wikipedia"
          className="wikipedia-mdx-embed"
          title={wikipediaLink}
          frameBorder="0"
          style={{
            width: '100%',
            minHeight: height,
          }}
          srcDoc={wikiResponse.body}
        />
      )}
    </GeneralObserver>
  );
};
