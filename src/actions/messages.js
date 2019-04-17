export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const SAVE_MESSAGE = 'SAVE_MESSAGE'

export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

function saveMessage(message) {
  return {
    type: SAVE_MESSAGE,
    message
  }
}