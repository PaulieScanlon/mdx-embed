import { createScriptTag } from '../../utils';

let isLinkedInScriptAdded = false;
export const linkedInClassNames = [`.LI-profile-badge`, `.LI-simple-link`].join(`,`);
const linkedInBadgesUrl = `https://platform.linkedin.com/badges/js/profile.js`;

const LIRenderAll = () => {
  if (typeof (window as any).LI !== `undefined` && typeof (window as any).LIRenderAll === `function`) {
    (window as any).LIRenderAll();
  }
};

export const handleLinkedInLoad = () => {
  if (document.querySelector(linkedInClassNames) !== null) {
    if (!isLinkedInScriptAdded) {
      createScriptTag(linkedInBadgesUrl, null);
      isLinkedInScriptAdded = true;
      return {
        status: 'createScriptTag',
      };
    }
  }

  LIRenderAll();
  return {
    status: 'null',
  };
};
