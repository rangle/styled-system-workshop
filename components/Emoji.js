import system from 'system-components'

export const Emoji = system(
  {
    is: 'span',
    mr: 2,
  },
  'space',
  'color',
)

Emoji.displayName = 'Emoji'

export default Emoji
