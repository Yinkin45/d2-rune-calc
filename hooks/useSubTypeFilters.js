import { useState } from 'react'

export default function useSubTypeFilters() {
  const [subTypeFilters, setSubTypeFilters] = useState([])

  const hasSubTypeFilter = (subType) => subTypeFilters.includes(subType)

  const addSubTypeFilter = (subTypeToAdd) => {
    setSubTypeFilters([subTypeToAdd, ...subTypeFilters])
  }

  const removeSubTypeFilter = (subTypeToRemove) => {
    setSubTypeFilters(
      subTypeFilters.filter((eachSubType) => {
        return eachSubType !== subTypeToRemove
      })
    )
  }

  const toggleSubTypeFilter = (subTypeToToggle, isEnabled) => {
    if (isEnabled) {
      addSubTypeFilter(subTypeToToggle)
    } else {
      removeSubTypeFilter(subTypeToToggle)
    }
  }

  const clearSubTypeFilters = () => setSubTypeFilters([])

  return {
    subTypeFilters,
    hasSubTypeFilter,
    addSubTypeFilter,
    removeSubTypeFilter,
    toggleSubTypeFilter,
    clearSubTypeFilters,
  }
}
