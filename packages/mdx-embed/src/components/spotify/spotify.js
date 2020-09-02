import React from 'react';
import { GeneralObserver } from '../general-observer';
export const Spotify = ({ spotifyLink, width = 320, height = 380, }) => (React.createElement(GeneralObserver, null,
    React.createElement("iframe", { title: `spotify-${spotifyLink}`, className: "spotify-mdx-embed", src: `https://open.spotify.com/embed/${spotifyLink}`, width: width, height: height, frameBorder: "0", allow: "encrypted-media" })));
