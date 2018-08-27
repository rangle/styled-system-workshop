import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const Root = styled.div([], {
  width: '100%',
  textAlign: 'center',
})

const Center = ({ children }) => {
  const [...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Box width={1}>{rest}</Box>
      </Flex>
    </Root>
  )
}

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Center
