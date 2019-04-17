import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UserList from './UserList'
import ChatWindow from './ChatWindow'

class ChatApp extends Component {

  render() {
    return (
      <div>
        <UserList />
        <ChatWindow />
      </div>
    )
  }
}

export default connect()(ChatApp)