import { future as base } from 'mdx-deck/themes'
import prismStyle from 'react-syntax-highlighter/styles/prism/cb'

export default {
  ...base,
  font: 'Fira Sans, sans-serif',
  monospace: 'Fira Mono, monospace',
  fontSizes: [16, 24, 32, 48, 64, 96, 128],
  colors: {
    ...base.colors,
  },
  css: {
    ...base.css,
    textAlign: 'left',
    fontSize: '16px',
    '& .Slide > div': {
      minWidth: '60vw',
      minHeight: '60vh',
    },
    '& pre': {
      fontSize: '24px',
    },
  },
  heading: {
    textTransform: 'none',
    fontVariant: 'small-caps',
    small: {
      fontSize: '0.5em',
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
    lineHeight: '1.25',
  },
  p: {
    textAlign: 'left',
  },
  blockquote: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    borderLeft: '4px solid',
    paddingLeft: '16px',
    lineHeight: '1.5',
    'p:before': {
      content: 'open-quote',
      marginRight: '0.5rem',
    },
    'p:after': {
      content: 'close-quote',
      marginLeft: '0.5rem',
    },
    cite: {
      position: 'relative',
      marginLeft: '2rem',
      top: '-0.5rem',
      fontSize: '1rem',
      '&:before': {
        content: '"— "',
      },
    },
  },
  prism: {
    style: prismStyle,
  },
}
