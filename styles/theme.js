const theme = {
  breakpoints: {
    xs: '352px',
    s: '580px',
    m: '829px',
    l: '1025px',
    xl: '1201px'
  },
  layout: {
    maxWidth: 1200,
    gutters: 15
  },
  colors: {
    white: '#fff',
    highlightYellow: '#FDF04E',
    transparentBlack: 'rgba(0,0,0,0.2)',
    lessTransparentBlack: 'rgba(0, 0, 0, 0.45)',
    darkGrey: '#212125'
  },
  fonts: {
    base: {
      fontSize: '10px',
      fontFamily: '"Roboto", sans-serif',
    },
    xs: '1.1rem', //not used yet
    s: {
      fontSize: '1.3rem',
      lineHeight: 1.6
    },
    m: {
      fontSize: '1.7rem',
    },
    l: {
      fontSize: '2.4rem'
    },
    xl: { 
      fontSize: '14rem',
      letterSpacing: '-.5rem',
      lineHeight: 0.8,
      responsive: {
        xs: { fontSize: '4.8rem' },
        s: {
          fontSize: '6rem',
          letterSpacing: '-.15rem',
          lineHeight: 1,
        },
        m: {
          fontSize: '10rem',
          lineHeight: 0.9,
        },
      }
    },
    weights: {
      heavyBold: 900,
      bold: 700,
      medium: 400,
      regular: 300
    },
  }
}

export default theme
