import { style } from 'styled-system'
import styled from 'styled-components'
import { components } from 'mdx-deck'

export const listStyleType = style({
  prop: 'listStyleType',
})

export const UnorderedList = styled(components.ul)`
  ${listStyleType};
`

export const ListItem = styled(components.li)`
  ${listStyleType};
`
