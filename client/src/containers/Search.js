import React, {useContext, useState} from 'react'
import SearchContext from '../context/search'
import SearchForm from '../components/SearchForm'
import TextInput from '../components/TextInput'

export default () => {
  const [query, setQuery] = useState('')
  const {setQuery: setContextQuery} = useContext(SearchContext)

  const handleSubmit = e => {
    setContextQuery(query)
    e.preventDefault()
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <TextInput
        type="search"
        value={query}
        onChange={({target}) => setQuery(target.value)}
      />
    </SearchForm>
  )
}
