import { 
  saveUser,
  updateUserInfo,
  startChatting,
  stopChatting 
} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const SET_STATUS = 'SET_STATUS'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CHAT_STATUS = 'UPDATE_CHAT_STATUS'

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

export function handleAddUser(username) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveUser({
      username
    })
      .then((user) => (dispatch(addUser(user))))
      .then( () => (dispatch(hideLoading())))
  }
}

function updateUser (user) {
  return {
    type: UPDATE_USER,
    user
  }
} 

export function handleUpdateProfile (user, nickname, dob, gender) {
  return (dispatch) => {
    dispatch(showLoading())
    return updateUserInfo({
      user,
      nickname,
      dob,
      gender
    })
      .then((user) => (dispatch(updateUser(user))))
      .then( () => (dispatch(hideLoading())))
  }
}

export function setStatus(user, status) {
  return {
    type: SET_STATUS,
    user,
    status
  }
}

function updateChatStatus(users) {
  return {
    type: UPDATE_CHAT_STATUS,
    users
  }
}

export function handleStartChatting (loggedUser, otherUser) {
  return (dispatch) => {
    dispatch(showLoading())
    return startChatting({
      loggedUser,
      otherUser
    })
      .then((users) => ( dispatch(updateChatStatus(users))))
      .then(() => (dispatch(hideLoading())))
  }
}

export function handleStopChatting (loggedUser, otherUser) {
  return (dispatch) => {
    dispatch(showLoading())
    return stopChatting({
      loggedUser,
      otherUser
    })
      .then((users) => ( dispatch(updateChatStatus(users))))
      .then(() => (dispatch(hideLoading())))
  }
}
