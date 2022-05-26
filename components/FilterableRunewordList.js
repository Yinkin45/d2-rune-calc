import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import RunewordList from './RunewordList'
import ALL_RUNEWORDS from '../data'
import useTypeFilters from '../hooks/useTypeFilters'

export default function FilterableRunewordList() {
  const [searchTerm, setSearchTerm] = useState('')
  const { typeFilters, toggleTypeFilter } = useTypeFilters()

  const [filteredRunewords, setFilteredRunewords] = useState(ALL_RUNEWORDS)

  useEffect(() => {
    updateSearchResults()
  }, [searchTerm, typeFilters])

  const updateSearchResults = () => {
    const searchResults = ALL_RUNEWORDS.filter((eachRuneword) => {
      if (!eachRuneword.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
      if (typeFilters.length > 0 && !hasCommonElement(eachRuneword.types, typeFilters)) return false

      return true
    })
    setFilteredRunewords(searchResults)
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar toggleTypeFilter={toggleTypeFilter} />
      <RunewordList runewords={filteredRunewords} />
    </div>
  )
}

function hasCommonElement(a, b) {
  return a.filter((value) => b.includes(value)).length > 0
}
