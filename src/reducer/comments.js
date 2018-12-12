import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { Record } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  author: null,
  text: null,
  loading: false
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (commentsState = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case LOAD_ALL_COMMENTS + START:
      return commentsState.set('loading', true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      return commentsState.set('entities', arrToMap(response, CommentRecord)).set('loading', false)

    case ADD_COMMENT:
      return commentsState.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    default:
      return commentsState
  }
}
