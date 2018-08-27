const Box = system(
  { is: 'div' },
  'space',
  'width',
  'fontSize',
  'color',
  'flex',
  'alignSelf',
)
Box.displayName = 'Box'

const Text = system(
  {
    is: 'p',
    fontSize: 1,
    color: 'black',
    textAlign: 'left',
  },
  'space',
  'color',
  'width',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
)
Text.displayName = 'Text'

const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: 3,
    color: 'black',
    textAlign: 'left',
  },
  'space',
  'color',
  'width',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
)
Heading.displayName = 'Heading'

render(
  <Box p={3}>
    <Heading mb={4}>Title</Heading>

    <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </Text>

    <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </Text>
  </Box>,
)
