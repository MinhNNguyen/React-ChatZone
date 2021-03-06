import {
  RECEIVE_USERS,
  ADD_USER,
  UPDATE_USER,
  SET_STATUS,
  UPDATE_CHAT_STATUS
} from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: action.user
      }
    case UPDATE_USER:
      console.log('UPDATE USER: ', action.user)
      return {
        ...state,
        [action.user.id]: action.user
      }
    case UPDATE_CHAT_STATUS:
      return {
        ...state,
        ...action.users
      }
    case SET_STATUS:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          status: action.status
        }
      }
    default:
      return state
  }
}