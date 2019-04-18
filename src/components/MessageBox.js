import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSendMessage } from '../actions/messages'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class MessageBox extends Component {
  state = {
    text: ''
  }

  
  addEmoji = (e) => {
    if (e.unified.length <= 5){
      let emojiPic = String.fromCodePoint(`0x${e.unified}`)
      this.setState({
        text: this.state.text + emojiPic
      })
    }else {
      let sym = e.unified.split('-')
      let codesArray = []
      sym.forEach(el => codesArray.push('0x' + el))
      let emojiPic = String.fromCodePoint(...codesArray)
      this.setState({
        text: this.state.text + emojiPic
      })
    }
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState( () => ({
      text: text
    }))
  }

  sendText = (e) => {
    e.preventDefault()
    const { dispatch, loggedUser, recipientId } = this.props 
    const { text } = this.state

    dispatch(handleSendMessage({
      loggedUser,
      recipientId,
      text
    }))
    this.setState( () => ({
      text: ''
    }))
  }

  render() {
    return (
      <div class="type_msg">
        <div class="input_msg_write">
          <input 
            type="text" 
            class="write_msg" 
            placeholder="Type a message"
            value={this.state.text}
            onChange={this.handleChange} />
          <button 
            class="msg_send_btn" 
            type="button"
            onClick={this.sendText} >
            <i class="fa fa-paper-plane-o" 
               aria-hidden="true">
            </i>
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({loggedUser}, {recipientId}) {
  return {
    loggedUser,
    recipientId
  }
}

export default connect(mapStateToProps)(MessageBox)