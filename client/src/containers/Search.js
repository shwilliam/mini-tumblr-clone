import React, {useContext, useState} from 'react'
import SearchContext from '../context/search'
import SearchForm from '../components/SearchForm'
import IconInput from '../components/IconInput'
import SROnly from '../components/SROnly'

export default () => {
  const [query, setQuery] = useState('')
  const {setQuery: setContextQuery} = useContext(SearchContext)

  const handleSubmit = e => {
    setContextQuery(query)
    e.preventDefault()
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SROnly>
        <label for="search-input">Search feed</label>
      </SROnly>
      <IconInput
        id="search-input"
        type="search"
        value={query}
        onChange={({target}) => setQuery(target.value)}
      />
    </SearchForm>
  )
}
