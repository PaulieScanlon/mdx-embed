import { createScriptTag } from '../../utils';

let isInstgrmScriptAdded = false;
export const instgrmClassNames = [`.instagram-media`, `.instagram-media-rendered`].join(`,`);
const instgrmEmbedUrl = `https://www.instagram.com/embed.js`;

const instgrmProcess = () => {
  if (
    typeof (window as any).instgrm !== `undefined` &&
    (window as any).instgrm.Embeds &&
    typeof (window as any).instgrm.Embeds.process === `function`
  ) {
    (window as any).instgrm.Embeds.process();
  }
};

export const handleInstagrmLoad = () => {
  if (document.querySelector(instgrmClassNames) !== null) {
    if (!isInstgrmScriptAdded) {
      createScriptTag(instgrmEmbedUrl, null);
      isInstgrmScriptAdded = true;
      return {
        status: 'createScriptTag',
      };
    }
  }
  instgrmProcess();
  return {
    status: 'instgrmProcess',
  };
};
