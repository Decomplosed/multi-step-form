import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Enter User Details' />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
