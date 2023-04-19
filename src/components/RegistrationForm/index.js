// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErr: false,
    lastNameErr: false,
    submitForm: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const validFirstName = firstName !== ''
    const validLastName = lastName !== ''

    if (validFirstName && validLastName) {
      this.setState({submitForm: true})
    } else {
      this.setState({
        firstNameErr: !validFirstName,
        lastNameErr: !validLastName,
        submitForm: false,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const validFirstName = firstName !== ''

    this.setState({firstNameErr: !validFirstName})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const validLastName = lastName !== ''

    this.setState({lastNameErr: !validLastName})
  }

  renderFirstNameField = () => {
    const {firstName, firstNameErr} = this.state
    const classFirstName = firstNameErr
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          className={classFirstName}
        />
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, lastNameErr} = this.state
    const classLastName = lastNameErr
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          className={classLastName}
        />
      </>
    )
  }

  renderFormDetails = () => {
    const {firstNameErr, lastNameErr} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">{this.renderFirstNameField()}</div>
        {firstNameErr && <p className="error-message">Required</p>}
        <div className="input-container">{this.renderLastNameField()}</div>
        {lastNameErr && <p className="error-message">Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit another response
      </button>
    </>
  )

  onClickSubmitAnotherResponse = () => {
    const {submitForm} = this.state
    this.setState({submitForm: !submitForm, firstName: '', lastName: ''})
  }

  render() {
    const {submitForm} = this.state

    return (
      <div className="container">
        <h1 className="heading">Registration</h1>
        {submitForm
          ? this.renderSubmissionSuccessView()
          : this.renderFormDetails()}
      </div>
    )
  }
}
export default RegistrationForm
