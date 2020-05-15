import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  }

  nextStep = () => {
    const { step } = this.state
    const { firstName, lastName, email, occupation, city, bio } = this.state
    const values = { firstName, lastName, email, occupation, city, bio }

    this.setState({
      step: step + 1,
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  switch(step) {
    case 1:
      return (
        <FormUserDetails />
      )
  }
}

export default UserForm
