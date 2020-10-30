import React from 'react';

export default function Form ({ content, state, handleChange, handleSubmit }) {
  return (
    <section className='content'>
      <h2>Kontakt</h2>
      <div className='contact-content'>
        <div className='content-item'>
          {content.content}
        </div>

        <form
          id='contact-form'
          onSubmit={handleSubmit}
          method='POST'
        >

          <div className='form-group'>
            <label htmlFor='name'>Imię i nazwisko*</label>
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
            <label htmlFor='email1'>Adres email*</label>
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
            <label htmlFor='phone'>Numer Telefonu*</label>
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
            <label htmlFor='topic'>Temat*</label>
            <input
              name='topic'
              className='form'
              title='temat wiadomości musi zawierać co
              najmniej 3 i co najwyżej 100 znaków'
              minLength='3'
              maxLength='100'
              value={state.topic}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group grid-2'>
            <label htmlFor='message'>Treść wiadomości*</label>
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

          <div className='form-group grid-2'>
            <input
              name='checkbox'
              type='checkbox'
              tittle='zgoda jest wymagana'
              checked={state.checkbox}
              onChange={handleChange}
              required
            />
            <span>* </span>
            <label htmlFor='checkbox'>
              {content.checkbox}
            </label>
          </div>

          <button
            type='submit'
            className='btn'
            data-sitekey='r6Ld9x9kZAAAAAERGQ9LaW6tJA0MA-Hu6DGVoITij'
          >Wyślij
          </button>
        </form>

        <div className='content-item'>
          <div>
            <p>{content.name}</p>
            <p>{content.address}</p>
            <p><a className='italic' href={`tel:${content.phone}`}>{content.phone}</a></p>
            <a className='italic' href={`mailto:${content.email}`}>{content.email}</a>
            <p />
          </div>
        </div>
      </div>
    </section>
  );
}
