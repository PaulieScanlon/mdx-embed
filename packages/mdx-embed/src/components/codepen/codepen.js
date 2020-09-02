import React from 'react';
import { GeneralObserver } from '../general-observer';
export const CodePen = ({ codePenId, height = 500, tabs = 'result', clickToLoad = false, editable = false, theme = 'default', }) => (React.createElement(GeneralObserver, { height: height },
    React.createElement("iframe", { title: `codePen-${codePenId}`, className: "codepen-mdx-embed", height: height, style: {
            width: '100%',
        }, scrolling: "no", src: `https://codepen.io/team/codepen/embed${clickToLoad ? '/preview' : ''}/${codePenId}?height=265&theme-id=${theme}&default-tab=${tabs}${editable ? '&editable=true' : ''}`, frameBorder: "no", allowFullScreen: true })));
