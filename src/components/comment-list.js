import React, { Component } from 'react'
import Comment from './comment'
import Button from './button'
import dropdown from '../decorators/dropdown'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props
    if (!isOpen) return null

    return <ul>{this.commentItems()}</ul>
  }

  commentItems() {
    const { comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default dropdown(CommentList)
