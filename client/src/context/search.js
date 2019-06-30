import React, {createContext, useState} from 'react'

const SearchContext = createContext('')

export const SearchContextProvider = ({children, ...props}) => {
  const [query, setQuery] = useState('')

  return (
    <SearchContext.Provider value={{query, setQuery}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext
