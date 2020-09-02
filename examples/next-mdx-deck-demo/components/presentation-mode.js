import React from 'react'
import styled from 'styled-components'
import { MODES } from '../constants/modes'

const PresentationFrame = styled.div`
  display: flex;
  padding: 3rem;
  max-height: 100vh;
`

const SlideWindow = styled.div`
  width: 65%;
  overflow-y: scroll;

  & > div {
    padding: 1rem;
    max-height: 80vh;
  }

  #slide {
    border: 1px solid #fff;
    align-items: flex-start;
    height: auto;
  }
`

const Sidebar = styled.div`
  width: 35%;

  & > div {
    padding: 1rem;
  }
`

const SpeakerNotesWindow = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  border: 1px solid #fff;

  font-size: 16px;

  & > div {
    padding: 1rem;
  }
`

export default function PresentationMode({
  mode,
  notes,
  currentSlide,
  children,
}) {
  if (mode === MODES.SPEAKER) {
    return (
      <PresentationFrame>
        <SlideWindow>
          <div>{children}</div>
        </SlideWindow>
        <Sidebar>
          <div>
            {/* <NextSlideFrame /> */}
            <SpeakerNotesWindow>
              <div>{notes[currentSlide]}</div>
            </SpeakerNotesWindow>
          </div>
        </Sidebar>
      </PresentationFrame>
    )
  }
  return children
}
