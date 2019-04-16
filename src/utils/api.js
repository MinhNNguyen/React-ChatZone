import {
  _getUsers,
  _getMessages,
  _saveUser,
  _saveMessage
} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getMessages(),
  ]).then(([users, messages]) => ({
    users,
    messages
  }))
}

export function saveMessage(info) {
  return _saveMessage(info)
}

export function saveUser(info) {
  return _saveUser(info)
}


