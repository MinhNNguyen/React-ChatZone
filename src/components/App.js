import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn'
import UserInfo from './UserInfo'
import ChatApp from './ChatApp'



class App extends Component {
  state = {
    hasError: false
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Route path='/' exact component={SignIn} />
            <Route path='/userinfo' component={UserInfo} />
            <Route path='/chatapp' component={ChatApp} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
