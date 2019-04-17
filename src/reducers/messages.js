import {
  RECEIVE_MESSAGES,
  ADD_MESSAGE
} from '../actions/messages'

export default function messages( state={}, action) {
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return {
        ...state,
        ...action.messages
      }
    case ADD_MESSAGE: 
      return {
        ...state,
        [action.message.id]: action.message
      }
    default:
      return state
  }
}