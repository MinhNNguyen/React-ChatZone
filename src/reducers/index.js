import { combineReducers } from 'redux'
import loggedUser from './loggedUser'
import messages from './messages'
import users from './users'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers ({
  loggedUser,
  messages,
  users,
  loadingBar: loadingBarReducer
})