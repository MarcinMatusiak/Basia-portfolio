import React, { useState } from 'react';

export default function Form () {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  function handleSubmit (event) {
    event.preventDefault();

    fetch('http://localhost:3000/api/send', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(
      (response) => (response.json())
    ).then((response) => {
      if (response.status === 'success') {
        alert('Message Sent.');
        resetForm();
      } else if (response.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  function handleChange (event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  function resetForm () {
    setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  }

  return (
    <div className='App'>
      <form
        id='contact-form'
        onSubmit={handleSubmit}
        method='POST'
      >
        <div className='form-group'>
          <label htmlFor='name'>Imię i nazwisko</label>
          <input
            name='name'
            type='text'
            className='form'
            title="Imie i nazwisko powinno składać się z 2 lub więcej wyrazów,
              dozwolone litery oraz znaki ', ´, `, - oraz spacja"
            minLength='5'
            maxLength='50'
            pattern="^[a-zA-Z\u00C0-\u021B-'´`]+\.?\s([a-zA-Z\u00C0-\u021B-'´`]+\.?\s?)+$"
            value={state.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email1'>Adres email</label>
          <input
            name='email'
            type='email'
            className='form'
            title='adres email powinien mieć format xxxxx@yyy.zz,
              dozwolone znaki -, _, . oraz cyfry i litery'
            pattern='\b[\w\._-]+@[\w\._-]+\.[a-zA-Z]{2,3}'
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Numer Telefonu</label>
          <input
            name='phone'
            type='tel'
            className='form'
            title='numer telefonu powinien składać się z co najmniej 9 cyfr,
              dozowlone znaki +, -, ., (), oraz spacja'
            minLength='9'
            maxLength='21'
            pattern='^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$'
            value={state.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Treść wiadomości</label>
          <textarea
            name='message'
            className='form'
            title='treść wiadomości musi zawierać co
              najmniej 5 i co najwyżej 1000 znaków'
            minLength='5'
            maxLength='1000'
            value={state.message}
            onChange={handleChange}
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
