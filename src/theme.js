import { future as base } from 'mdx-deck/themes'
import prismStyle from 'react-syntax-highlighter/styles/prism/cb'

export const colors = {
  darkGray: '#2a2a2a',
  white: '#ffffff',
  gold: '#ffc400',
  yellow: '#ffe62a',
  pink: '#ea71ae',
  darkPink: '#d84e74',
  blue: '#22aaff',
  darkBlue: '#88aaff',
  green: '#00c874',
  lightGreen: '#b4ff26',
  mauve: '#c3bbff',
  purple: '#5a5ae6',
}

export const themeColors = {
  ...colors,
  background: colors.darkGray,
  text: colors.white,
  link: colors.darkBlue,
  blockquote: colors.white,
  code: colors.blue,
}

export const theme = {
  ...base,
  font: 'Fira Sans, sans-serif',
  monospace: 'Fira Mono, monospace',
  fontSizes: [16, 24, 32, 48, 64, 96, 128],
  colors: {
    ...base.colors,
    ...themeColors,
  },
  css: {
    ...base.css,
    textAlign: 'left',
    fontSize: '16px',
    a: {
      color: colors.link,
    },
    '& .Slide > div': {
      minWidth: '60vw',
      maxWidth: '80vw',
      minHeight: '60vh',
      maxHeight: '80vw',
    },
    '& pre': {
      fontSize: '1.25vw',
    },
    '& #slide-0': {
      h1: {
        fontSize: '96px',
      },
    },
  },
  transitionDuration: 0,
  heading: {
    textTransform: 'none',
    fontVariant: 'small-caps',
    small: {
      fontSize: '0.5em',
      fontVariant: 'none',
    },
    code: {
      fontVariant: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  ul: {
    listStyleType: '"◪"',
    paddingLeft: '1em',
  },
  li: {
    marginBottom: '1em',
    paddingLeft: '0.6em',
    lineHeight: 1,
  },
  p: {
    textAlign: 'left',
  },
  blockquote: {
    fontStyle: 'italic',
    fontSize: '3rem',
    fontWeight: 800,
    borderLeft: '4px solid',
    paddingLeft: '16px',
    lineHeight: '1.5',
    position: 'relative',
    '&:before': {
      position: 'absolute',
      left: '1rem',
      top: '-0.5rem',
      fontSize: '4rem',
      content: 'open-quote',
    },
    p: {
      fontSize: '3rem',
      margin: '1rem 3rem',
    },
    cite: {
      margin: '0 1rem',
      fontSize: '2rem',
      '&:before': {
        content: '"— "',
      },
      a: {
        fontWeight: 'normal',
        color: '#ccc',
      },
    },
  },
  prism: {
    style: prismStyle,
  },
}

export default theme
