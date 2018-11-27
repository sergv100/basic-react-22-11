import React from 'react'
import CommentList from './comment-list'
import Button from './button'

function Article(props) {
  const { article, isOpen, toggleOpen } = props
  let title = isOpen ? 'close' : 'open'
  return (
    <div>
      <h3>{article.title}</h3>
      <Button title={title} clickHandler={toggleOpen} />
      {getBody(props)}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return (
    <section>
      {article.text}
      <CommentList comments={article.comments} />
    </section>
  )
}

export default Article
