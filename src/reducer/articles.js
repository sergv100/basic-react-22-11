import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, SORT_BY_TITLE } from '../constants'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case SORT_BY_TITLE:
      return articlesState.filter((article) => article.id === payload.id)

    default:
      return articlesState
  }
}
