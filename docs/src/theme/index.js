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
  fontWeight: {
    body: 400,
    heading: 800,
  },
  lineHeight: {
    body: '1.4em',
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
  },
  text: {
    default: {
      color: 'grey',
      fontSize: '14px',
      fontFamily: 'body',
      lineHeight: 'body',
      my: 3,
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
