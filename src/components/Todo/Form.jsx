import React from 'react'
import { v4 as fakeId } from 'uuid'

const Form = ({ onSubmit }) => {
  const [title, setTitle] = React.useState('')

  const handleSubmit = () => {
    event.preventDefault()

    const item = {
      id: fakeId(),
      title: title,
      isChecked: false,
    }

    onSubmit(item)
    // reset
    setTitle('')
  }

  return (
    <form className='view-sm flex items-end mb-4' onSubmit={handleSubmit}>
      <div className='ui-input' style={{ width: '100%' }}>
        <label htmlFor='input-DqS1'>Enter todo</label>
        <input
          id='input-DqS1'
          required
          type='text'
          value={title}
          placeholder='Enter todo here'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className='ui-button isPrimary' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form
