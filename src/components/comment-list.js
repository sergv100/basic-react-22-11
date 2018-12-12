import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from './comment'
import CommentForm from './comment-form'
import toggleOpen from '../decorators/toggleOpen'
import { commentsLoadingSelector, createCommentSelector } from '../selectors'
import { loadAllCommentsByArticleId } from '../ac'
import Loader from './common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentDidUpdate(prevProps) {
    const { fetchAllComments, article, isOpen } = this.props
    return (
      isOpen &&
      !!article.comments.length &&
      !prevProps.isOpen &&
      fetchAllComments &&
      fetchAllComments(article.id)
    )
  }

  render() {
    const { isOpen, toggleOpen, loading } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    if (loading) return <Loader />
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
    const { article, isOpen } = this.props
    if (!isOpen) return null

    const body = article.comments.length ? (
      <ul className="test__comment-list--body">
        {article.comments.map((id) => (
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
        <CommentForm articleId={article.id} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      comments: createCommentSelector(state),
      loading: commentsLoadingSelector(state)
    }
  },
  { fetchAllComments: loadAllCommentsByArticleId }
)(toggleOpen(CommentList))
