import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSignIn} from '../actions/loggedUser'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { Card } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

  state = {
    email: '',
    name: '',
    toUserInfo: false,
    toChatApp: false
  }

  responseGoogleFail = (error) => {
    console.log(error)
  }

  responseGoogleSuccess = (response) => {
    console.log(response)
    const {dispatch} = this.props

    const google_email = response.profileObj.email
    const google_name = response.profileObj.name
    dispatch(handleSignIn(google_email))

    this.setState( (prevState) => ({
      email: google_email,
      name: google_name,
      toUserInfo: true
    }))
  }

  responseFacebook = (response) => {
    console.log(response)
    const {dispatch} = this.props

    const fb_email = response.email
    const fb_name = response.name
    dispatch(handleSignIn(fb_email))

    this.setState( (prevState) => ({
      email: fb_email,
      name: fb_name,
      toUserInfo: true
    }))
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
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleFail}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div>
            <FacebookLogin
              appId="331845904187700"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook} />
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default connect()(SignIn)