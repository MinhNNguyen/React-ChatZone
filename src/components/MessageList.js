import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'

class MessageList extends Component {

  render() {
    return (
      <div>
        {
          this.props.dialog.map( (id) => (
            <Message key={id} id={id} />
          ))  
        }
      </div>
    )
  }
}

function mapStateToProps({loggedUser, users, messages}, {recipientId}) {
  const dialog = Object.keys(messages)
    .filter( (id) => (( messages[id].senderId === loggedUser 
      && messages[id].receiverId === recipientId )
      || ( messages[id].senderId === recipientId
      && messages[id].receiverId === loggedUser )))

  return {
    dialog : dialog
      .sort((a, b) => messages[a].timestamp - messages[b].timestamp)
  }
}

export default connect(mapStateToProps)(MessageList)