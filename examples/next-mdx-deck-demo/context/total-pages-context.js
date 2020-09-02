import React from 'react'

export const TotalPagesContext = React.createContext(0)

export const useTotalPages = () => React.useContext(TotalPagesContext)
