import React from 'react'
import classNames from 'classnames'

const Tags = ({ items, onItemClick = '', isVeritcal }) => {
  const classes = classNames('ui-button-group', {
    'flex-col items-start justify-center': isVeritcal,
  })

  return (
    <div className='flex view-sidebar__content'>
      <div className={classes}>
        {items && items.length > 0
          ? items.map((item) => (
              <span
                className={classNames('ui-tag', { isActive: item.isActive })}
                key={item.id}
                onClick={() => onItemClick && onItemClick(item.id)}
              >
                {item.title}
              </span>
            ))
          : ''}
      </div>
    </div>
  )
}

export default Tags
