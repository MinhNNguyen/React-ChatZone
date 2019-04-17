import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { handleSendMessage } from '../actions/messages'

class MessageBox extends Component {
  state = {
    text: ''
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
      <div>
        <Form onSubmit={this.sendText}>
          <Form.Group>
            <Form.Control 
              as="textarea" 
              rows="3"
              value={this.state.text}
              onChange={this.handleChange}>
            </Form.Control>
          </Form.Group>
          <Button
            variant="btn btn-lg btn-primary btn-block text-uppercase"
            type="submit"
            >
            Submit
          </Button>
        </Form>
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