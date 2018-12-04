import { DELETE_ARTICLE, INCREMENT, SORT_BY_TITLE } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function sortByTitle(id) {
  return {
    type: SORT_BY_TITLE,
    payload: { id }
  }
}
