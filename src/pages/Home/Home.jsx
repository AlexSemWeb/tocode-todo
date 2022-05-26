import React from 'react'

import { Form, List, Tags } from '../../components/Todo'

import { Container } from '../../layouts'

import todos from '../../seeders/todos.json'
import tagsSeeder from '../../seeders/tags.json'
import useFilterList from '../../hooks/useFilterList'

const HomePage = () => {
  // data from localStorage
  const localItems = JSON.parse(localStorage.getItem('items')) || null
  // final output
  const items_ = localItems && localItems.length > 0 ? localItems : todos
  // state
  const [items, setItems] = React.useState(items_ || [])
  const [tags, setTags] = React.useState(
    JSON.parse(JSON.stringify(tagsSeeder)) || []
  )
  const filteredTodoList = useFilterList(items, tags)

  // store
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  // update
  const handleChangeItem = (id) => {
    const nextItems = items.map((el) =>
      el.id === id ? { ...el, isChecked: !el.isChecked } : el
    )
    setItems(nextItems)
  }

  // sort
  const clickSidebarTag = (tagId) => {
    const nextTags = tags.map((tag) => {
      if (tag.id === tagId) {
        tag.isActive = !tag.isActive
        return tag
      }

      tag.isActive = false
      return tag
    })
    setTags(nextTags)
  }

  // destroy
  const handleRemoveItem = (id) => {
    const nextItems = [...items]

    const indexForRemove = nextItems.findIndex((el) => el.id === id)
    nextItems.splice(indexForRemove, 1)

    setItems(nextItems)
  }

  React.useEffect(
    () => localStorage.setItem('items', JSON.stringify(items)),
    [items]
  )

  return (
    <Container>
      <div className='view-wrapper'>
        <div className='view-sidebar'>
          <Tags items={tags} onItemClick={clickSidebarTag} isVeritcal />
        </div>
        <div className='view-content'>
          <Form onSubmit={handleSubmit} />
          <List
            items={filteredTodoList}
            onChangeItem={handleChangeItem}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
