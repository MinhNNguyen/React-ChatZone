export const SET_LOGGED_USER = 'SET_LOGGED_USER'

export function setLoggedUser (id) {
  return {
    type: SET_LOGGED_USER,
    id
  }
}

export function handleSignIn(id) {
  return (dispatch) => {
    return(dispatch(setLoggedUser(id)))
  }
}

export function handleSignOut(id) {
  return (dispatch) => {
    return(dispatch(setLoggedUser('')))
  }
}

    