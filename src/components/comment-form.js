import React, { Component } from 'react'
import Button from './button'

class CommentForm extends Component {
  static defaultProps

  render() {
    return (
      <form>
        comment:
        <textarea />
        <br />
        author:
        <input />
        <br />
        <Button title="add new comment" clickHandler={(e) => e.preventDefault()} />
      </form>
    )
  }
}

export default CommentForm
