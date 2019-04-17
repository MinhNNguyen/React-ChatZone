import {
  RECEIVE_USERS,
  ADD_USER,
  UPDATE_DOB,
  UPDATE_NICKNAME,
  UPDATE_SEX,
  SET_STATUS
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
    case UPDATE_DOB:
      return state
    case UPDATE_NICKNAME:
      return state
    default:
      return state
  }
}