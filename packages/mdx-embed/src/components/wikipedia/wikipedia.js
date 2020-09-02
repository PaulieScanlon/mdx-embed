import React, { useEffect, useState } from 'react';
import { GeneralObserver } from '../general-observer';
export const Wikipedia = ({ wikipediaLink, height = 600 }) => {
  const [wikiResponse, setWikiResponse] = useState({
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
          setWikiResponse({
            isLoading: false,
            hasError: false,
            body: response.replace(/<a rel="mw:WikiLink"/g, '<a target="_blank" rel="mw:WikiLink"'),
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
  return React.createElement(
    GeneralObserver,
    null,
    !wikiResponse.isLoading &&
      React.createElement('iframe', {
        className: 'wikipedia-mdx-embed',
        title: wikipediaLink,
        frameBorder: '0',
        style: {
          width: '100%',
          minHeight: height,
        },
        srcDoc: wikiResponse.body,
      }),
  );
};
