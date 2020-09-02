import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Split = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
