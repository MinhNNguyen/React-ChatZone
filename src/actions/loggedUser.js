import { setLoggedUserStatus } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setStatus } from './users'
export const SET_LOGGED_USER = 'SET_LOGGED_USER'

export function setLoggedUser (id) {
  return {
    type: SET_LOGGED_USER,
    id
  }
}

export function handleSignIn(id) {
  return (dispatch) => {
    dispatch(showLoading())
    return setLoggedUserStatus(id, 'online')
      .then(() => (dispatch(setLoggedUser(id))))
      .then(() => ( dispatch(setStatus(id, 'online'))))
      .then(() =>(dispatch(hideLoading())))
  }
}

export function handleSignOut(id) {
  return (dispatch) => {
    return(dispatch(setLoggedUser('')))
  }
}

    