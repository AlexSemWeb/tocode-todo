import React from 'react'
import { v4 as fakeId } from 'uuid'

import Tags from './Tags'

import tagsSeeder from '../../seeders/tags.json'

const Form = ({ onSubmit }) => {
  const [title, setTitle] = React.useState('')
  const [tags, setTags] = React.useState(JSON.parse(JSON.stringify(tagsSeeder)))

  const handleChooseTag = (tagId) => {
    const nextTags = tags.map((el) =>
      el.id === tagId ? { ...el, isActive: !el.isActive } : el
    )

    setTags(nextTags)
  }

  const handleSubmit = () => {
    event.preventDefault()

    const tagsCopy = tags.filter((item) => {
      if (item.isActive) {
        delete item.isActive
        return true
      }
      return false
    })

    const item = {
      id: fakeId(),
      title: title,
      isChecked: false,
      tags: tagsCopy,
    }

    onSubmit(item)
    // reset
    setTitle('')
    setTags(tagsSeeder)
  }

  return (
    <form className='mb-8' onSubmit={handleSubmit}>
      <div className='flex items-end'>
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
      </div>
      <Tags items={tags} onItemClick={handleChooseTag} />
    </form>
  )
}

export default Form
