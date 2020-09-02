import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utils';
export const Tweet = ({ tweetLink, theme = 'light', align = 'left', hideConversation = false, }) => (React.createElement(GeneralObserver, { onEnter: () => handleTwttrLoad() },
    React.createElement("div", { className: "twitter-tweet-mdx-embed", style: { overflow: 'auto' } },
        React.createElement("blockquote", { className: "twitter-tweet", "data-theme": theme, "data-align": align, "data-conversation": hideConversation ? 'none' : '' },
            React.createElement("a", { href: `https://twitter.com/${tweetLink}?ref_src=twsrc%5Etfw` }, typeof window !== 'undefined' && !window.twttr ? 'Loading' : '')))));
