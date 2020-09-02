import React from 'react';
import { GeneralObserver } from '../general-observer';
export const SoundCloud = ({ soundCloudLink, width = '100%', height = 'auto', autoPlay = false, visual = false, color, }) => (React.createElement(GeneralObserver, null,
    React.createElement("iframe", { title: `sound-cloud-${soundCloudLink}`, className: "soundcloud-mdx-embed", width: width, height: height, scrolling: "no", frameBorder: "no", allow: "autoplay", src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${soundCloudLink}&color=%23${color}&auto_play=${autoPlay}&visual=${visual}` })));
