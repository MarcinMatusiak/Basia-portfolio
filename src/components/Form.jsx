import React, { Component } from 'react';

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

    fetch('http://localhost:3000/api/send', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(
      (response) => (response.json())
    ).then((response) => {
      if (response.status === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange (event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneChange (event) {
    this.setState({ phone: event.target.value });
  }

  handleMessageChange (event) {
    this.setState({ message: event.target.value });
  }

  resetForm () {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  }

  render () {
    return (
      <div className='App'>
        <form
          id='contact-form'
          onSubmit={this.handleSubmit}
          method='POST'
        >
          <div className='form-group'>
            <label htmlFor='name'>Imię i nazwisko</label>
            <input
              type='text'
              className='form'
              title="Imie i nazwisko powinno składać się z 2 lub więcej wyrazów,
              dozwolone litery oraz znaki ', ´, `, - oraz spacja"
              minLength='5'
              maxLength='50'
              pattern="^[a-zA-Z\u00C0-\u021B-'´`]+\.?\s([a-zA-Z\u00C0-\u021B-'´`]+\.?\s?)+$"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email1'>Adres email</label>
            <input
              type='email'
              className='form'
              title='adres email powinien mieć format xxxxx@yyy.zz,
              dozwolone znaki -, _, . oraz cyfry i litery'
              pattern='\b[\w\._-]+@[\w\._-]+\.[a-zA-Z]{2,3}'
              value={this.state.email}
              onChange={this.handleEmailChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Numer Telefonu</label>
            <input
              type='tel'
              className='form'
              title='numer telefonu powinien składać się z co najmniej 9 cyfr,
              dozowlone znaki +, -, ., (), oraz spacja'
              minLength='9'
              maxLength='21'
              pattern='^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$'
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Treść wiadomości</label>
            <textarea
              className='form'
              title='treść wiadomości musi zawierać co
              najmniej 5 i co najwyżej 1000 znaków'
              minLength='5'
              maxLength='1000'
              value={this.state.message}
              onChange={this.handleMessageChange}
              required
            />
          </div>
          <button
            type='submit'
            className='btn'
            data-sitekey='r6Ld9x9kZAAAAAERGQ9LaW6tJA0MA-Hu6DGVoITij'
          >Wyślij
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
