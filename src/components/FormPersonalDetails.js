import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
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
          <br />
          <TextField
            hintText='Enter your last name'
            floatingLabelText='Last name'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText='Enter your email address'
            floatingLabelText='Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15,
  },
}

export default FormPersonalDetails
