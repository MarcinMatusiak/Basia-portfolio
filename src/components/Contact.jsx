import React, { useState, useEffect } from 'react';
import Form from './Form';

export default function Contact () {
  const [content, setContent] = useState([]);
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    checkbox: false
  });

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(res => setContent(res));
  }, []);

  function handleSubmit (event) {
    event.preventDefault();

    fetch('http://localhost:3000/api/contact/send', {
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
        alert('Wiadomość Wysłana.');
        resetForm();
      } else if (response.status === 'fail') {
        alert('Nie udało się wysłać wiadomości.');
      }
    });
  }

  function handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    });
  }

  function resetForm () {
    setState({
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      checkbox: false
    });
  }

  return (content && state && <Form content={content} state={state} handleChange={handleChange} handleSubmit={handleSubmit} />);
}
