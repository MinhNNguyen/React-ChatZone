import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddUser } from '../actions/users'
import { handleSignIn} from '../actions/loggedUser'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router-dom'

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
        .then(() => (dispatch(handleSignIn(email))))
    }
    else {
      dispatch(handleSignIn(email))
    }

    

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
        .then(() => (dispatch(handleSignIn(email))))
    }
    else {
      dispatch(handleSignIn(email))
    }

    this.setState(() =>({
      toUserInfo: true
    }))

  }

  render() {
    const { toUserInfo } = this.state
    
    if (toUserInfo === true) {
      return <Redirect to='/userinfo' />
    }

    return (
      <div className="container">
        <div className="col-sm-14 col-md-10 col-lg-8 mx-auto">
          <div className="card my-5">
            <h1
              className="card-title text-center">
              Chat Zone
            </h1>
            <div className="sign-in-area">
              <GoogleLogin
                  clientId="996857602631-te36f7sd9va1vvt5rulnc5hnu90gknja.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.successResponseGoogle}
                  onFailure={this.failResponseGoogle}
                  cookiePolicy={'single_host_origin'}
                />  
            </div>
            {/* <div className="sign-in-area">
              <FacebookLogin
                appId="331845904187700"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.responseFacebook}
                callback={this.responseFacebook} />
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(SignIn)