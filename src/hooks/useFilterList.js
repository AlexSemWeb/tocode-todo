import React from 'react'

const useFilterList = (listItems = [], tags = []) => {
  let filteredList = React.useMemo(() => {
    let indexActiveTag = tags.findIndex((tag) => tag.isActive)

    if (indexActiveTag !== -1 && listItems.length) {
      return listItems.filter((item) => {
        return item.tags && item.tags.length > 0
          ? item.tags.some((el) => el.id === tags[indexActiveTag].id)
          : false
      })
    }

    return listItems
  }, [tags, listItems])

  return filteredList
}

export default useFilterList
