import { createScriptTag } from '../../utils';
let isInstgrmScriptAdded = false;
const instgrmClassNames = [`.instagram-media`, `.instagram-media-rendered`].join(`,`);
const instgrmEmbedUrl = `https://www.instagram.com/embed.js`;
const instgrmProcess = () => {
    if (typeof window.instgrm !== `undefined` &&
        window.instgrm.Embeds &&
        typeof window.instgrm.Embeds.process === `function`) {
        window.instgrm.Embeds.process();
    }
};
export const handleInstagrmLoad = () => {
    if (document.querySelector(instgrmClassNames) !== null) {
        if (!isInstgrmScriptAdded) {
            createScriptTag(instgrmEmbedUrl, null);
            isInstgrmScriptAdded = true;
        }
    }
    instgrmProcess();
};
