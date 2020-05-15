import React, { Component } from 'react'
import moduleName from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    return (
      <div>
        <h1>Form User Details</h1>
      </div>
    )
  }
}

export default FormUserDetails
