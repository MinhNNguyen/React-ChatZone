import { getInitialData } from '../utils/api'
import { receiveUsers} from './users'
import { receiveMessages } from './messages'
import { setLoggedUser } from './loggedUser'
import {showLoading, hideLoading} from  'react-redux-loading'

const AUTHED_ID = ''

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, messages }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveMessages(messages))
        dispatch(setLoggedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}