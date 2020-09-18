export default {
  colors: {
    primary: '#fcb42d',
    secondary: '#1EA7FD',
    text: '#000000',
    background: '#ffffff',
    lightGrey: '#999999',
    grey: '#333333',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  fontSizes: {
    body: '1.1em',
  },
  fontWeight: {
    body: 400,
    heading: 800,
  },
  lineHeight: {
    body: '1.6em',
    heading: 'normal',
  },
  space: [0, 4, 8, 16, 24],
  styles: {
    p: {
      variant: 'text.default',
    },
    a: {
      color: 'secondary',
      variant: 'text.default',
    },
    hr: {
      my: 2,
      borderColor: 'transparent',
    },
    ul: {
      variant: 'text.default',
    },

    li: {
      fontSize: 'body',
    },
  },
  text: {
    default: {
      color: 'grey',
      fontSize: 'body',
      fontFamily: 'body',
      lineHeight: 'body',
      my: 3,
      code: {
        lineHeight: 1,
        margin: '0 2px',
        padding: '3px 5px',
        whiteSpace: 'nowrap',
        borderRadius: '3px',
        fontSize: '15px',
        border: '1px solid #EEEEEE',
        color: 'rgba(51,51,51,0.9)',
        backgroundColor: '#F8F8F8',
      },
    },
    heading: {},
  },
  buttons: {
    default: {
      cursor: 'pointer',
      fontFamily: 'body',
      borderRadius: 0,
    },
    primary: {
      variant: 'buttons.default',
    },
  },
};
