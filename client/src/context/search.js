import React, {createContext, useState} from 'react'

const SearchContext = createContext('')

const SearchContextProvider = ({children, ...props}) => {
  const [query, setQuery] = useState('')

  return (
    <SearchContext.Provider value={{query, setQuery}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext
export {SearchContextProvider}
