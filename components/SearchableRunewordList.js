import { useState } from 'react'
import SearchBar from './SearchBar'
import RunewordList from './RunewordList'
import ALL_RUNEWORDS from '../data'

export default function SearchableRunewordList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredRunewords, setFilteredRunewords] = useState(ALL_RUNEWORDS)

  const onSearchTextChanged = (text) => {
    const searchResults = ALL_RUNEWORDS.filter((eachRuneword) => {
      return eachRuneword.name.toLowerCase().includes(text.toLowerCase())
    })
    setSearchTerm(text)
    setFilteredRunewords(searchResults)
  }

  const onSearchClear = () => {
    setSearchTerm('')
    setFilteredRunewords(ALL_RUNEWORDS)
  }
  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onTextChanged={onSearchTextChanged}
        onClearClick={onSearchClear}
      />
      <RunewordList runewords={filteredRunewords} />
    </div>
  )
}
