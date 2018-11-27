import React from 'react'

function Comment(props) {
  const { comment } = props

  return (
    <div>
      <p>{comment.text}</p>
      <span>{comment.user}</span>
    </div>
  )
}

export default Comment
