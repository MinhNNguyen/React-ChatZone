import React, { Component } from  'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { handleUpdateProfile } from '../actions/users'

class UserInfo extends Component {
  state = {
    nickname: '',
    dob: '',
    gender: '',
    toChatApp: false
  }

  handleChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    this.setState( () => ({
      ...this.state,
      [fieldName]: fieldValue
    }))
  }

  submit = (e) => {
    e.preventDefault()
    const { dispatch, loggedUser} = this.props
    const { nickname, dob, gender } = this.state
    dispatch(handleUpdateProfile(loggedUser, nickname, dob, gender))
    this.setState(() => ({
      nickname: '',
      dob: '',
      gender: '',
      toChatApp: true
    })) 
  }

  render() {

    if ( this.state.toChatApp === true ) {
      return <Redirect to='/chatapp' />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">User Info</h5>
                <Form onSubmit={this.submit}>
                  <Form.Group>
                    <Form.Label>
                      Nickname
                    </Form.Label>
                    <Form.Control 
                      type="text"
                      name="nickname"
                      onChange={this.handleChange}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Date of Birth
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      onChange={this.handleChange}
                      />
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                      Gender
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      value="male"
                      onChange={this.handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="female"
                      onChange={this.handleChange}
                    />
                    </Col>
                  </Form.Group>            
                  <Button
                    variant="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({loggedUser}) {
  return {
    loggedUser
  }
}

export default connect(mapStateToProps)(UserInfo)