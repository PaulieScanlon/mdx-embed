import { createScriptTag } from '../../utils';

let isWistiaAdded = false;
const embedUrl = `https://fast.wistia.net/assets/external/E-v1.js`;

export const handleWistiaLoad = () => {
  if (isWistiaAdded) {
    return;
  }
  createScriptTag(embedUrl, null);
  isWistiaAdded = true;
};
