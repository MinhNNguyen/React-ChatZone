import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleStartChatting } from '../actions/users'


class User extends Component {

  chatWith = (e) => {
    const { logged, user, dispatch } = this.props
    e.preventDefault()
    if ( logged.status !== 'online') {
      alert('Cannot open chat window because you are not available')
    }
    else if (user.status !== 'online') {
      alert('Cannot open chat window because the user is not available')
    }
    else {
      dispatch(handleStartChatting(logged.id, user.id))
    }
  }

  render() {
    const { nickname, status } = this.props.user
    return (
      <div class="chat_list" onClick={this.chatWith}>
        <div class="chat_people">
          <div class="chat_img"> 
            <img 
              src="https://ptetutorials.com/images/user-profile.png" 
              alt={nickname}/> 
          </div>
          <div class="chat_ib">
            <h5>
              {nickname} 
              <span class="chat_date">
                {status}
              </span>
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( {users, loggedUser}, {id} ) {
  return {
    logged: users[loggedUser],
    user: users[id]
  }
}

export default connect(mapStateToProps)(User)