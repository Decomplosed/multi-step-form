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
        <h1>Form User Details</h1>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
