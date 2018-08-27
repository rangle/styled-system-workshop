import React from 'react'
import PropTypes from 'prop-types'
import Embed from './Embed'
import { queryString } from '../utils'

export const CodeSandbox = ({
  id,
  width = '60vw',
  height = '80vh',
  hidenavigation = 1,
  moduleview = 1,
  autoresize = 1,
  codemirror = 0,
  eslint = 0,
  forcerefresh = 0,
  expanddevtools = 0,
  runonclick = 0,
  view = 'split',
  previewwindow = '',
  initialpath,
  fontsize = 16,
  highlights = '',
  editorsize = 50,
  verticallayout = 0,
  ...props
}) => {
  const query = queryString({
    hidenavigation,
    moduleview,
    autoresize,
    codemirror,
    eslint,
    forcerefresh,
    expanddevtools,
    runonclick,
    view,
    previewwindow,
    initialpath,
    fontsize,
    highlights,
    editorsize,
    verticallayout,
  })
  const src = `https://codesandbox.io/embed/${id}?${query}`

  return (
    <Embed {...props} width={width} height={height}>
      <iframe src={src} frameBorder="0" allowFullScreen />
    </Embed>
  )
}

CodeSandbox.displayName = 'CodeSandbox'

CodeSandbox.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  hidenavigation: PropTypes.oneOf([0, 1]),
  moduleview: PropTypes.oneOf([0, 1]),
  autoresize: PropTypes.oneOf([0, 1]),
  codemirror: PropTypes.oneOf([0, 1]),
  eslint: PropTypes.oneOf([0, 1]),
  forcerefresh: PropTypes.oneOf([0, 1]),
  expanddevtools: PropTypes.oneOf([0, 1]),
  runonclick: PropTypes.oneOf([0, 1]),
  view: PropTypes.oneOf(['', 'editor', 'preview', 'split']),
  previewview: PropTypes.oneOf(['', 'console', 'tests', 'browser']),
  initialpath: PropTypes.string,
  fontsize: PropTypes.number,
  highlights: PropTypes.string,
  editorsize: PropTypes.number,
  verticallayout: PropTypes.oneOf([0, 1]),
}

export default CodeSandbox
