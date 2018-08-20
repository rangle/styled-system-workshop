import React from 'react'
import PropTypes from 'prop-types'
import Embed from './Embed'

const queryString = (params) =>
  Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')

export const StackBlitz = ({
  id,
  width = '50vw',
  embed = 1,
  file = 'index.js',
  hideExplorer = 0,
  hideNavigation = 0,
  hidedevtools = 1,
  view = 'editor',
  ...props
}) => {
  const query = queryString({
    embed,
    file,
    hideExplorer,
    hideNavigation,
    hidedevtools,
    view,
  })
  const src = `https://stackblitz.com/edit/${id}?${query}`

  return (
    <Embed {...props} width={width}>
      <iframe src={src} frameBorder="0" allowFullScreen />
    </Embed>
  )
}

StackBlitz.displayName = 'StackBlitz'

StackBlitz.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  file: PropTypes.string,
  hideExplorer: PropTypes.oneOf([0, 1]),
  hideNavigation: PropTypes.oneOf([0, 1]),
  hidedevtools: PropTypes.oneOf([0, 1]),
  view: PropTypes.oneOf(['', 'editor', 'preview']),
}

export default StackBlitz
