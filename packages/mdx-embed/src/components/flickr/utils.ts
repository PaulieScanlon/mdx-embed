import { createScriptTag } from '../../utils';

let isFlickrScriptAdded = false;
export const flickrClassNames = [`.flickr-embed`].join(`,`);
const flickrEmbedUrl = `https://embedr.flickr.com/assets/client-code.js`;

export const handleFlickrLoad = () => {
  if (document.querySelector(flickrClassNames) !== null) {
    if (!isFlickrScriptAdded) {
      createScriptTag(flickrEmbedUrl, null);
      isFlickrScriptAdded = true;
      return {
        status: 'createScriptTag',
      };
    }
  }
  return {
    status: 'null',
  };
};
