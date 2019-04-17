import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Row, Col } from 'react-bootstrap'

class MessageBox extends Component {
  render() {
    return (
      <div>
        <Form.Group>
          <Form.Control as="textarea" rows="3">
          </Form.Control>
        </Form.Group>
        <Button
          variant="btn btn-lg btn-primary btn-block text-uppercase"
          type="submit">
          Submit
        </Button>
      </div>
    )
  }
}

export default connect()(MessageBox)