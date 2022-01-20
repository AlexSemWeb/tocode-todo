import React from 'react'

import { Container } from '../../layouts'

const Form = () => {
  const [title, setTitle] = React.useState('')

  const handleSubmit = () => {
    event.preventDefault()

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

const HomePage = () => {
  return (
    <Container>
      <Form />
    </Container>
  )
}

export default HomePage
