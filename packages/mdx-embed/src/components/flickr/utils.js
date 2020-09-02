import { createScriptTag } from '../../utils';
let isFlickrScriptAdded = false;
const flickrEmbedClassNames = [`.flickr-embed`].join(`,`);
const flickrEmbedUrl = `https://embedr.flickr.com/assets/client-code.js`;
export const handleFlickrLoad = () => {
  if (document.querySelector(flickrEmbedClassNames) !== null) {
    if (!isFlickrScriptAdded) {
      createScriptTag(flickrEmbedUrl, null);
      isFlickrScriptAdded = true;
    }
  }
};
