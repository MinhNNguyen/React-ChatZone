import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UserList from './UserList'
import ChatWindow from './ChatWindow'

class ChatApp extends Component {

  render() {
    return (
      <div class="container">
        <h3 class=" text-center">Messaging</h3>
        <div class="messaging">
          <div class="inbox_msg">
            <UserList />
            <ChatWindow />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(ChatApp)