const Box = system(
  {
    bg: 'white',
    color: 'mediumvioletred',
    p: 2,
  },
  'space',
  'width',
  'fontSize',
  'color',
  'flex',
  'alignSelf',
)

render(<Box p={3}>This is a Box</Box>)
