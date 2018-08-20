import system from 'system-components'

export const Embed = system(
  {
    ratio: 9 / 16,
  },
  'width',
  'height',
  'ratio',
  'space',
  'color',
  () => ({
    position: 'relative',
    overflow: 'hidden',
    '& > iframe': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0,
    },
  }),
)

Embed.displayName = 'Embed'

export default Embed
