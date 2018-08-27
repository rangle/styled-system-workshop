const Box = styled.div`
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${flex};
  ${alignSelf};
`

render(
  <Box bg="white" color="mediumvioletred" p={3}>
    This is a Box
  </Box>,
)
