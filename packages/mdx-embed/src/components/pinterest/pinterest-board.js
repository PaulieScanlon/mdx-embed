import React from 'react';
import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utils';
export const PinterestBoard = ({ pinterestLink, width = 400, height = 250, imageWidth = 80, variant = 'board', }) => (React.createElement(GeneralObserver, { onEnter: () => handlePinterestBuild() },
    React.createElement("a", { className: "pinterest-board pinterest-board-mdx-embed", "data-pin-do": `embed${variant.charAt(0).toUpperCase()}${variant.slice(1)}`, "data-pin-board-width": width, "data-pin-scale-height": height, "data-pin-scale-width": imageWidth, href: `https://www.pinterest.com/${pinterestLink}` })));
