import { createScriptTag } from '../../utils';

let isPinterestScriptAdded = false;
export const pinterestClassNames = [`.pinterest-pin`, `.pinterest-board`, `.pinterest-follow-button`].join(`,`);
const pinterestEmbedScript = `!function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"//assets.pinterest.com/js/pinit_main.js"});`;

const pinterestBuild = () => {
  if (
    typeof (window as any).PinUtils !== `undefined` &&
    (window as any).PinUtils &&
    typeof (window as any).PinUtils.build === `function`
  ) {
    (window as any).PinUtils.build();
  }
};

export const handlePinterestBuild = () => {
  if (document.querySelector(pinterestClassNames) !== null) {
    if (!isPinterestScriptAdded) {
      createScriptTag(null, pinterestEmbedScript);
      isPinterestScriptAdded = true;
      return {
        status: 'createScriptTag',
      };
    }
  }
  pinterestBuild();
  return {
    status: 'pinterestBuild',
  };
};
