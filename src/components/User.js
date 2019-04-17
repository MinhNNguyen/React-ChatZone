import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { handleStartChatting } from '../actions/users'


class User extends Component {

  chatWith = (e) => {
    const { loggedUser, user, dispatch } = this.props
    e.preventDefault()
    if ( loggedUser.status !== 'online') {
      alert('Cannot open chat window because you are not available')
    }
    else if (user.status !== 'online') {
      alert('Cannot open chat window because the user is not available')
    }
    else {
      dispatch(handleStartChatting(loggedUser, user))
    }
  }

  render() {
    const { nickname, status } = this.props.user
    return (
      <div 
        onClick={this.chatWith} >
        <div>
          {nickname}
        </div>
        <div>
          Status: {status}
        </div>
      </div>
    )
  }
}

function mapStateToProps( {users, loggedUser}, {id} ) {
  const user = users[id]
  return {
    loggedUser,
    user
  }
}

export default connect(mapStateToProps)(User)