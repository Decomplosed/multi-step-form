import React, { Component } from 'react'

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
    
    this.setState({
      step: step + 1,
    })
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  render() {
    return <div></div>
  }
}

export default UserForm
