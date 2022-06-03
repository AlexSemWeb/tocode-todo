import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const Tags = ({ items = [], onItemClick, isVertical }) => {
  const classes = classNames('ui-button-group', {
    'flex-col items-start justify-center': isVertical,
  })

  return (
    <div className='flex view-sidebar__content'>
      <div className={classes}>
        {items && items.length > 0
          ? items.map((item) => {
              const { id, title, isActive } = item
              const className = classNames('ui-tag', { isActive })

              return (
                <span
                  className={className}
                  key={id}
                  onClick={() => onItemClick(id)}
                >
                  {title}
                </span>
              )
            })
          : ''}
      </div>
    </div>
  )
}

Tags.propTypes = {
  items: propTypes.array,
  onItemClick: propTypes.func,
  isVertical: propTypes.bool,
}

Tags.defaultProps = {
  items: [],
  onItemClick: () => {},
  isVertical: false,
}

export default Tags
