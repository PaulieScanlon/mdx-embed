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
    body:
      '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
  },
  fontSizes: {
    body: '14px',
  },
  fontWeight: {
    body: 400,
  },
  lineHeight: {
    body: '24px',
  },

  styles: {
    p: {
      variant: 'text.default',
    },
    a: {
      color: 'secondary',
      variant: 'text.default',
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
  },
};
