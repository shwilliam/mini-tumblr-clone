import React, {useContext, useState} from 'react'
import SearchContext from '../context/search'

export default props => {
  const [query, setQuery] = useState('')
  const {setQuery: setContextQuery} = useContext(SearchContext)

  const handleSubmit = e => {
    setContextQuery(query)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={({target}) => setQuery(target.value)}
        {...props}
      />
      <button type="submit">search</button>
    </form>
  )
}
