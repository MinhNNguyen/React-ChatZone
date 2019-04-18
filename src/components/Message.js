import React, { Component } from 'react'
import { connect } from 'react-redux'

class Message extends Component {

  render() {
    const {text, senderNickname, time, loggedUser} = this.props

    return (
      <div>
        {
          senderNickname === loggedUser ?
            <div class="incoming_msg">
              <div class="incoming_msg_img">
                <img 
                  src="https://ptetutorials.com/images/user-profile.png" 
                  alt={senderNickname} /> 
              </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>{text}</p>
                  <span class="time_date"> {Date(time).toUTCString()}
                  </span>
                </div>
              </div>
            </div> 
            :
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>{text}</p>
                <span class="time_date">
                  {Date(time).toLocaleString()}
                </span> 
              </div>
            </div>  
        }
      </div>
    )
  }
}

function mapStateToProps({messages, users, loggedUser},{id}) {
  const message = messages[id]
  return {
    text: message.text,
    senderNickname: users[message.senderId].nickname,
    time: message.time,
    loggedUser
  }
}

export default connect(mapStateToProps)(Message)