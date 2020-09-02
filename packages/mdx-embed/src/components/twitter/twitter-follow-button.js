import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utils';
export const TwitterFollowButton = ({ username, showFollowers = false, showUsername = true, size = 'small', }) => (React.createElement(GeneralObserver, { onEnter: () => handleTwttrLoad() },
    React.createElement("a", { href: `https://twitter.com/${username}?ref_src=twsrc%5Etfw`, className: "twitter-follow-button twitter-follow-button-mdx-embed", "data-show-count": showFollowers, "data-show-screen-name": showUsername, "data-size": size }, `Follow @${username}`)));
