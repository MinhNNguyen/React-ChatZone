import { saveUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const UPDATE_DOB = 'UPDATE_DOB'
export const UPDATE_NICKNAME = 'UPDATE_NICKNAME'
export const UPDATE_SEX = 'UPDATE_SEX'
export const SET_STATUS = 'SET_STATUS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addUser (user) {
  return {
    type: ADD_USER,
    user
  }
}

export function handleAddUser(username, nickname) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveUser({
      username,
      nickname
    })
      .then((user) => (dispatch(addUser(user))))
      .then( () => (dispatch(hideLoading())))
  }
}

export function saveDOB (user, newDOB) {
  return {
    type: UPDATE_DOB,
    user,
    newDOB
  }
} 

export function saveNickname (user, newNickName) {
  return {
    type: UPDATE_NICKNAME,
    user,
    newNickName
  }
}

export function saveSex (user, sex) {
  return {
    type: UPDATE_SEX,
    user,
    sex
  }
}

export function handleUpdateProfile (user, nickname, dob, gender) {
  
}

export function setStatus(user, status) {
  return {
    type: SET_STATUS,
    user,
    status
  }
}