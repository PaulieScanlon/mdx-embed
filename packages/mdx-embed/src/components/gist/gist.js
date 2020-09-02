import React, { useEffect, useState } from 'react';
import { createScriptTag, createStyleSheet } from '../../utils';
import { GeneralObserver } from '../general-observer';
export const Gist = ({ gistLink }) => {
    const [gistResponse, setGistResponse] = useState({
        isLoading: true,
        div: '',
        file: '',
    });
    const root = `https://gist.github.com/`;
    const gistId = gistLink.split('/')[1];
    const gistEmbedScript = `${root}${gistLink}.json?callback=gist_callback_${gistId}`;
    useEffect(() => {
        window[`gist_callback_${gistId}`] = (gist) => {
            createStyleSheet(gist.stylesheet);
            setGistResponse({
                isLoading: false,
                div: gist.div,
                file: gist.files[0],
            });
        };
        createScriptTag(gistEmbedScript, null);
    }, [gistId, gistEmbedScript]);
    return (React.createElement(GeneralObserver, null, !gistResponse.isLoading && (React.createElement("div", { className: "gist-mdx-embed", dangerouslySetInnerHTML: { __html: gistResponse.div } }))));
};
