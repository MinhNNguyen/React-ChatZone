import {
  RECEIVE_MESSAGES,
  SAVE_MESSAGE
} from '../actions/messages'

export default function messages( state={}, action) {
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return {
        ...state,
        ...action.messages
      }
    case SAVE_MESSAGE: 
      return {
        ...state,
        [action.message.id]: action.message
      }
    default:
      return state
  }
}