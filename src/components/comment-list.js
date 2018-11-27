import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
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

export default CommentList
