import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import RunewordList from './RunewordList'
import ALL_RUNEWORDS from '../data'

export default function FilterableRunewordList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [runewordFilters, setRunewordFilters] = useState({
    types: [],
    subTypes: [],
    minLevel: 0,
    maxLevel: 99,
    numOfSockets: [],
  })
  const [filteredRunewords, setFilteredRunewords] = useState(ALL_RUNEWORDS)

  useEffect(() => {
    updateSearchResults()
  }, [searchTerm, runewordFilters])

  const updateSearchResults = () => {
    const searchResults = ALL_RUNEWORDS.filter((eachRuneword) => {
      if (!eachRuneword.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
      if (
        runewordFilters.types.length > 0 &&
        !hasCommonElement(eachRuneword.types, runewordFilters.types)
      )
        return false

      return true
    })
    setFilteredRunewords(searchResults)
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar runewordFilters={runewordFilters} setRunewordFilters={setRunewordFilters} />
      <RunewordList runewords={filteredRunewords} />
    </div>
  )
}

function hasCommonElement(a, b) {
  return a.filter((value) => b.includes(value)).length > 0
}
