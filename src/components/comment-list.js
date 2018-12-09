import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentForm from './comment-form'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul className="test__comment-list--body">
        {comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test__comment-list--empty">No comments yet</h3>
    )

    return (
      <div>
        {body}
        <CommentForm />
      </div>
    )
  }
}

/*
CommentList.propTypes = {

}
*/

export default toggleOpen(CommentList)
