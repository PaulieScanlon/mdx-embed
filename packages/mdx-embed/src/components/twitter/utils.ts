import { createScriptTag } from '../../utils';

let isTwttrScriptAdded = false;

export const twttrClassNames = [
  `.twitter-tweet`,
  `.twitter-timeline`,
  `.twitter-follow-button`,
  `.twitter-mention-button`,
  `.twitter-hashtag-button`,
].join(`,`);

const twttrEmbedScript = `
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")
`;

const twttrLoad = () => {
  if (
    typeof (window as any).twttr !== `undefined` &&
    (window as any).twttr.widgets &&
    typeof (window as any).twttr.widgets.load === `function`
  ) {
    (window as any).twttr.widgets.load(document.getElementsByClassName(`mdx-embed`));
  }
};

export const handleTwttrLoad = () => {
  if (document.querySelector(twttrClassNames) !== null) {
    if (!isTwttrScriptAdded) {
      createScriptTag(null, twttrEmbedScript);
      isTwttrScriptAdded = true;
      return {
        status: 'createScriptTag',
      };
    }
  }
  twttrLoad();
  return {
    status: 'twttrLoad',
  };
};
