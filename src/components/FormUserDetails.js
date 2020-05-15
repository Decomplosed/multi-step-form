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
    const { values, handleChange } = this.props

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='Enter your first name'
            floatingLabelText='First name'
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
