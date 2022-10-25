import { createScriptTag } from '../../utils';

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
  if (!(window as any).instgrm) {
    createScriptTag(instgrmEmbedUrl, null);
    return {
      status: 'createScriptTag',
    };
  } else {
    instgrmProcess();
    return {
      status: 'instgrmProcess',
    };
  }
};
