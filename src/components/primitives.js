import { style } from 'styled-system'
import styled from 'styled-components'
import { compose, defaultProps, withProps } from 'recompose'
import { components } from 'mdx-deck'
import { colors } from '../theme'

export const listStyleType = style({
  prop: 'listStyleType',
})

export const Paragraph = components.p

export const UnorderedList = styled(components.ul)`
  ${listStyleType};
`

export const ListItem = styled(components.li)`
  ${listStyleType};
`

export const Inline = compose(
  defaultProps({
    color: colors.blue,
  }),
  withProps((props) => {
    const color = Object.keys(props).find((p) => colors[p])
    return color ? { color: colors[color] } : {}
  }),
)(components.inlineCode)
