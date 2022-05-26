import { useState } from 'react'

export default function useTypeFilters() {
  const [typeFilters, setTypeFilters] = useState([])

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

  return { typeFilters, addTypeFilter, removeTypeFilter, toggleTypeFilter }
}
