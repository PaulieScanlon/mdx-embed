import { createContext, useContext, useState } from 'react'

export const CurrentSlideContext = createContext({
  currentSlide: 0,
  setSlide: () => {},
})

export function CurrentSlideProvider({ children }) {
  // Grab initial slide from hash (#) in URL
  const initialSlide =
    process.browser && window.location.hash
      ? parseInt(window.location.hash.replace('#', ''))
      : 0
  const [currentSlide, setSlide] = useState(initialSlide)

  return (
    <CurrentSlideContext.Provider value={{ currentSlide, setSlide }}>
      {children}
    </CurrentSlideContext.Provider>
  )
}

export const useCurrentSlide = () => useContext(CurrentSlideContext)
