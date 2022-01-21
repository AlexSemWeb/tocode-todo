import React, { useEffect } from 'react'
import { v4 as fakeId } from 'uuid'

import { Container } from '../../layouts'

const Form = ({ onSubmit }) => {
  const [title, setTitle] = React.useState('')

  const handleSubmit = () => {
    event.preventDefault()

    const item = {
      id: fakeId(),
      title: title,
    }

    onSubmit(item)
    // reset
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

const List = ({ items }) => {
  return (
    <>
      {items && items.length > 0
        ? items.map((item) => <p key={item.id}>{item.title}</p>)
        : 'Items not found'}
    </>
  )
}

const HomePage = () => {
  const [items, setItems] = React.useState([])

  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  React.useEffect(() => console.log(items), [items])

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
      <List items={items} />
    </Container>
  )
}

export default HomePage
