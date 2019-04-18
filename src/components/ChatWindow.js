import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageList from './MessageList'
import MessageBox from './MessageBox'
import { Button } from 'react-bootstrap'
import { handleStopChatting } from '../actions/users'

class ChatWindow extends Component {

  closeChat = (e) => {
    e.preventDefault()
    const { dispatch, logged } = this.props
    dispatch(handleStopChatting(logged.id, logged.chatWith))

  }

  render() {
    const { status, chatWith } = this.props.logged
    const { users } = this.props
  
    return (
      <div class="mesgs">
        {
          chatWith != '' ?
          <div class="msg_history">
            <div class="chatheader">
              <div class="chatheader_left">
                <h5>
                  {users[chatWith].nickname}
                </h5>
              </div>
              <div class="chatheader_right">
                <button
                  onClick={this.closeChat}>
                  Close
                </button>
              </div>
            </div>
            <MessageList recipientId={chatWith}/>
            <MessageBox recipientId={chatWith}/>
          </div> :
          <div class="msg_history">
            <p> Click on any online user to chat with </p>
          </div>
        }
        
      </div>
    )
  }
}

function mapStateToProps({loggedUser, users}) {
  const logged = users[loggedUser]
  return {
    logged: logged,
    users
  }
} 

export default connect(mapStateToProps)(ChatWindow)