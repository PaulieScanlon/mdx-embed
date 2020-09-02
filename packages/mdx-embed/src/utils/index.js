export const getPadding = (aspectRatio) => {
    const config = {
        '1:1': {
            paddingTop: '100%',
        },
        '16:9': {
            paddingTop: '56.25%',
        },
        '4:3': {
            paddingTop: '75%',
        },
        '3:2': {
            paddingTop: '66.66%',
        },
        '8.5': {
            paddingTop: '62.5%',
        },
    };
    // @ts-ignore
    return config[aspectRatio];
};
export const createScriptTag = (providerEmbedUrl, providerEmbedScript) => {
    const script = document.createElement(`script`);
    script.type = `text/javascript`;
    if (providerEmbedUrl) {
        script.src = providerEmbedUrl;
    }
    if (providerEmbedScript) {
        script.innerText = providerEmbedScript;
    }
    script.onerror = (error) => {
        console.error(`MDXEmbedProvider ${error.type}`, error);
    };
    document.getElementsByTagName(`head`)[0].appendChild(script);
};
export const createStyleSheet = (href) => {
    const link = document.createElement(`link`);
    link.type = `text/css`;
    link.rel = `stylesheet`;
    link.href = href;
    document.getElementsByTagName(`head`)[0].appendChild(link);
};
