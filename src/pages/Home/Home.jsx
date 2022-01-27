import React from 'react'

import { Form, List } from '../../components/Todo'

import { Container } from '../../layouts'

import todos from '../../seeders/todos.json'

const HomePage = () => {
  // data from localStorage
  const localItems = JSON.parse(localStorage.getItem('items')) || null
  // final output
  const items_ = localItems && localItems.length > 0 ? localItems : todos
  // state
  const [items, setItems] = React.useState(items_ || [])

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
      <Form onSubmit={handleSubmit} />
      <List
        items={items}
        onChangeItem={handleChangeItem}
        onRemoveItem={handleRemoveItem}
      />
    </Container>
  )
}

export default HomePage
