import React from 'react'
import styled, { css } from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const StyledProvider = styled(LiveProvider)`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  border-radius: 6px;
  overflow: hidden;
`

const LiveWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  font-family: 'Roboto Mono', 'Menlo', 'Andale Mono', monospace;
  font-size: 1.15vw;
`

const header = css`
  display: block;
  text-align: center;
  text-transform: uppercase;
  flex-basis: 50%;
  padding: 0.5rem 1rem;
`

const content = css`
  height: 60vh;
  padding: 1rem !important;
`

const preview = css`
  flex: ${({ flex = 1 }) => flex};
  text-align: center;
`

const editor = css`
  flex: ${({ flex = 1.5 }) => flex};
`

const EditorHeader = styled.div`
  background-color: #272822;
  ${header};
  ${editor};
`

const PreviewHeader = styled.div`
  background-color: #ddd;
  color: #424242;
  ${header};
  ${preview};
`

const StyledEditor = styled(LiveEditor)`
  height: auto;
  overflow: scroll;
  ${editor};
  ${content};
`

const StyledPreview = styled(LivePreview)`
  display: flex;
  flex-direction: column;
  background: ${({ background = 'white' }) => background};
  justify-content: ${({ align = 'inherit' }) => align};
  text-align: ${({ align = 'inherit' }) => align};
  overflow-y: scroll;
  ${preview};
  ${content};
`

const StyledError = styled(LiveError)`
  display: block;
  color: red;
`

export const CodePlayground = ({
  width = '100%',
  height = '100%',
  noInline = true,
  previewBackground = 'transparent',
  previewAlign = 'center',
  previewFlex = 1,
  editorFlex = 1.5,
  scope = {},
  code,
  ...props
}) => (
  <StyledProvider
    code={code}
    noInline={noInline}
    scope={scope}
    width={width}
    height={height}
    {...props}
  >
    <LiveWrapper>
      <PreviewHeader flex={previewFlex}>Live Preview</PreviewHeader>
      <EditorHeader flex={editorFlex}>Source Code</EditorHeader>
    </LiveWrapper>
    <LiveWrapper>
      <StyledPreview
        flex={previewFlex}
        align={previewAlign}
        background={previewBackground}
      />
      <StyledEditor flex={editorFlex} />
    </LiveWrapper>
    <StyledError />
  </StyledProvider>
)

export default CodePlayground
