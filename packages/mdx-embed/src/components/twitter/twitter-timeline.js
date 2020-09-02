import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utils';
export const TwitterTimeline = ({ username, theme = 'light', showLikes = null, width = '498px', height = null, }) => (React.createElement(GeneralObserver, { onEnter: () => handleTwttrLoad() },
    React.createElement("div", { style: { overflow: 'auto' } },
        React.createElement("a", { className: "twitter-timeline twitter-timeline-mdx-embed", "data-theme": theme, "data-width": width, "data-height": height, href: `https://twitter.com/${username}${showLikes ? `/likes` : ''}?ref_src=twsrc%5Etfw` }, `Tweets by @${username}`))));
