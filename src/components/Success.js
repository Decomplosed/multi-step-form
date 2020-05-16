import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Success extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Success' />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
