import { showLoading, hideLoading} from  'react-redux-loading'
import { saveMessage } from '../utils/api'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export function handleSendMessage({loggedUser, recipientId, text}) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveMessage({
      senderId: loggedUser,
      receiverId: recipientId,
      text
    })
      .then((message) => dispatch(addMessage(message)))
      .then(() => dispatch(hideLoading()))
  }
}