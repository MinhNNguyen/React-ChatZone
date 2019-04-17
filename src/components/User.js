import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

  render() {
    const { nickname, status } = this.props.user
    return (
      <div>
        <div>
          Nickname: {nickname}
        </div>
        <div>
          Status: {status}
        </div>
      </div>
    )
  }
}

function mapStateToProps( {users}, {id} ) {
  const user = users[id]
  return {
    user
  }
}

export default connect(mapStateToProps)(User)