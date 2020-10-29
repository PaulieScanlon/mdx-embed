import { createScriptTag } from '../../utils';

let isTikTokScriptAdded = false;
export const tikTokClassNames = `.tiktok-embed`;
const tikTokEmbedUrl = `https://www.tiktok.com/embed.js`;

export const handleTikTokLoad = () => {
  if (document.querySelector(tikTokClassNames) !== null) {
    if (!isTikTokScriptAdded) {
      createScriptTag(tikTokEmbedUrl, null);
      isTikTokScriptAdded = true;
      return {
        status: 'createScriptTag',
      };
    }
  }
  return {
    status: 'null',
  };
};
