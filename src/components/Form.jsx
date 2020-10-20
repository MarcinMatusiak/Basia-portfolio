import React, { Component } from 'react';

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      message: '',
      name: '',
      email: '',
      phone: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

    fetch('http://localhost:3000/send', {
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

  onNameChange (event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange (event) {
    this.setState({ email: event.target.value });
  }

  onPhoneChange (event) {
    this.setState({ phone: event.target.value });
  }

  onMessageChange (event) {
    this.setState({ message: event.target.value });
  }

  resetForm () {
    this.setState({ name: '', email: '', message: '' });
  }

  render () {
    return (
      <div className='App'>
        <form id='contact-form' onSubmit={this.handleSubmit} method='POST'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control' onChange={this.onNameChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email1'>Email address</label>
            <input type='email' className='form-control' aria-describedby='email' onChange={this.onEmailChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone number</label>
            <input type='number' className='form-control' aria-describedby='phone' onChange={this.onPhoneChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea className='form-control' rows='5' onChange={this.onMessageChange} />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
