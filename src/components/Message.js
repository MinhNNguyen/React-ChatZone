import React, { Component } from 'react'
import { connect } from 'react-redux'

class Message extends Component {

  render() {
    return (
      <div>
        This is old Message
      </div>
    )
  }
}

export default connect()(Message)