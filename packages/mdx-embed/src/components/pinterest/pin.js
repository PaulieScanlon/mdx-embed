import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utils';
export const Pin = ({ pinId, size = 'small' }) => (React.createElement(GeneralObserver, { onEnter: () => handlePinterestBuild() },
    React.createElement("a", { className: "pinterest-pin pinterest-pin-mdx-embed", "data-pin-do": "embedPin", "data-pin-width": size, href: `https://www.pinterest.com/pin/${pinId}` })));
