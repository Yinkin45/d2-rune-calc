import { useState } from 'react'

export default function useTypeFilters() {
  const [typeFilters, setTypeFilters] = useState([])

  const hasTypeFilter = (type) => typeFilters.includes(type)

  const addTypeFilter = (typeToAdd) => {
    setTypeFilters([typeToAdd, ...typeFilters])
  }

  const removeTypeFilter = (typeToRemove) => {
    setTypeFilters(
      typeFilters.filter((eachType) => {
        return eachType !== typeToRemove
      })
    )
  }

  const toggleTypeFilter = (typeToToggle, isEnabled) => {
    if (isEnabled) {
      addTypeFilter(typeToToggle)
    } else {
      removeTypeFilter(typeToToggle)
    }
  }

  const clearTypeFilters = () => setTypeFilters([])

  return {
    typeFilters,
    hasTypeFilter,
    addTypeFilter,
    removeTypeFilter,
    toggleTypeFilter,
    clearTypeFilters,
  }
}
