import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utils';
export const TwitterHashtagButton = ({ hashtag, size = 'small', }) => (React.createElement(GeneralObserver, { onEnter: () => handleTwttrLoad() },
    React.createElement("a", { href: `https://twitter.com/intent/tweet?button_hashtag=${hashtag}&ref_src=twsrc%5Etfw`, className: "twitter-hashtag-button twitter-hashtag-button-mdx-embed", "data-size": size }, `Tweet #${hashtag}`)));
