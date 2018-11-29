import React, { Component } from 'react'
import Comment from './comment'
import Button from './button'
import dropdown from '../decorators/dropdown'

class CommentList extends Component {
  render() {
    const { isOpen, toggleDropDown } = this.props
    let title = !isOpen ? 'show comments' : 'hide comments'
    if (!isOpen) return <Button title={title} clickHandler={toggleDropDown} />

    return (
      <div>
        <ul>{this.commentItems()}</ul>
        <Button title={title} clickHandler={toggleDropDown} />
      </div>
    )
  }

  commentItems() {
    const { comments } = this.props
    if (!comments) return null
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default dropdown(CommentList)
