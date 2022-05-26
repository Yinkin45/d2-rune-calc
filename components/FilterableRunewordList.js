import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import RunewordList from './RunewordList'
import useTypeFilters from '../hooks/useTypeFilters'
import useSubTypeFilters from '../hooks/useSubTypeFilters'
import ALL_RUNEWORDS from '../data'

export default function FilterableRunewordList() {
  const [searchTerm, setSearchTerm] = useState('')
  const { typeFilters, toggleTypeFilter } = useTypeFilters()
  const { subTypeFilters, toggleSubTypeFilter } = useSubTypeFilters()
  const [filteredRunewords, setFilteredRunewords] = useState(ALL_RUNEWORDS)

  useEffect(() => {
    console.log(`typeFilters: ${typeFilters}`)
    console.log(`subTypeFilters ${subTypeFilters}`)
    updateSearchResults()
  }, [searchTerm, typeFilters, subTypeFilters])

  const updateSearchResults = () => {
    const searchResults = ALL_RUNEWORDS.filter((eachRuneword) => {
      if (!eachRuneword.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
      if (typeFilters.length > 0 && !hasCommonElement(eachRuneword.types, typeFilters)) return false
      if (
        subTypeFilters.length > 0 &&
        eachRuneword.subTypes &&
        !hasCommonElement(eachRuneword.subTypes, subTypeFilters)
      )
        return false
      return true
    })
    setFilteredRunewords(searchResults)
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar toggleTypeFilter={toggleTypeFilter} toggleSubTypeFilter={toggleSubTypeFilter} />
      <RunewordList runewords={filteredRunewords} />
    </div>
  )
}

function hasCommonElement(a, b) {
  return a.filter((value) => b.includes(value)).length > 0
}
