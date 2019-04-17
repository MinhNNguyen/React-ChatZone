import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UserList from './UserList'
import ChatWindow from './ChatWindow'
import { Container, Row, Col } from 'react-bootstrap'

class ChatApp extends Component {

  render() {
    return (
      <Container className="container">
        <Row className="container">
          <Col xs={3} md={2}>
            <UserList />
          </Col>
          <Col xs={15} md={10}>
            <ChatWindow />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect()(ChatApp)