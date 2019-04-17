import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageList from './MessageList'
import MessageBox from './MessageBox'

class ChatWindow extends Component {

  state = {
    recipientID: '',
    input: ''
  }

  render() {
    return (
      <div>
        <div>
          Sarahedo
        </div>
        <MessageList 
          recipientId='sarahedo'
        />
        <MessageBox 
          recipientId='sarahedo'
        />
      </div>
    )
  }
}

function mapStateToProps({loggedUser, users, conversation}) {

} 

export default connect()(ChatWindow)