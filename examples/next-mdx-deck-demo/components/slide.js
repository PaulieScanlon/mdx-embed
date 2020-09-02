import React from 'react'
import styled from 'styled-components'

const StyledSlide = styled.div`
  width: 100%;
`

export default function Slide({ children, id, className }) {
  return (
    <StyledSlide id={id} className={className}>
      {children}
    </StyledSlide>
  )
}
