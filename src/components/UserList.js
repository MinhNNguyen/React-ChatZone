import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class UserList extends Component {

  render() {

    const { loggedUser, users} = this.props

    const availableUsers = Object.keys(users)
      .filter(user => user !== loggedUser)
      
    return (
      <div>
        {
          availableUsers
            .map((user) => (
                <User key={user} id={user} />
            ))
        }
      </div>
    )
  }
}

function mapStateToProps({loggedUser, users}) {
  return {
    loggedUser,
    users
  }
}

export default connect(mapStateToProps)(UserList)