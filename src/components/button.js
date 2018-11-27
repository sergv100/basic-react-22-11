import React from 'react'

const Button = (props) => {
  const { title, clickHandler } = props
  return (
    <button value={title} onClick={clickHandler}>
      {title}
    </button>
  )
}

export default Button
