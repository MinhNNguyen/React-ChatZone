import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSignIn} from '../actions/loggedUser'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { Card } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { handleAddUser } from '../actions/users'

class SignIn extends Component {

  state = {
    toUserInfo: false
  }

  failResponseGoogle = (error) => {
    console.log(error)
  }

  successResponseGoogle = (response) => {
    
    console.log(response)
    
    const {dispatch, users} = this.props
    const { email } = response.profileObj
    
    if (!Object.keys(users).includes(email)) {
      dispatch(handleAddUser(email))
    }

    dispatch(handleSignIn(email))

    this.setState(() =>({
      toUserInfo: true
    }))
  }

  responseFacebook = (response) => {
    
    console.log(response)
    
    const {dispatch, users} = this.props
    const { email } = response

    if (!Object.keys(users).includes(email)) {
      dispatch(handleAddUser(email))
    }

    dispatch(handleSignIn(email))

  }

  render() {
    const { toUserInfo } = this.state
    
    if (toUserInfo === true) {
      return <Redirect to='/userinfo' />
    }

    return (
      <Card>
        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          <div>
            <GoogleLogin
              clientId="996857602631-te36f7sd9va1vvt5rulnc5hnu90gknja.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.successResponseGoogle}
              onFailure={this.failResponseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div>
            <FacebookLogin
              appId="331845904187700"
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.responseFacebook}
              callback={this.responseFacebook} />
          </div>
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(SignIn)