import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Image from './Image';

export default function Modal ({ pics }) {
  const history = useHistory();
  const { name } = useParams();
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [image, setImage] = useState(pics.find(obj => obj.name === name));

  useEffect(() => {
    window.addEventListener('keydown', escape, false);

    return () => {
      window.removeEventListener('keydown', escape, false);
    };
  });

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  const escape = e => {
    if (e.keyCode === 27) {
      e.stopPropagation();
      history.goBack();
    };
  };

  const increase = (e) => {
    e.stopPropagation();
    setImage((pics.indexOf(image) === pics.length - 1) ? pics[0] : pics[pics.indexOf(image) + 1]);
  };

  const decrease = (e) => {
    e.stopPropagation();
    setImage((pics.indexOf(image) === 0) ? pics[pics.length - 1] : pics[pics.indexOf(image) - 1]);
  };

  return (
    <div
      className='modal-container'
      onClick={back}
      onKeyDown={escape}
    >
      <div
        className='modal'
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsDisplayed(true)}
        onMouseLeave={() => setIsDisplayed(false)}
      >
        <Image
          id={image.id} name={image.name}
        />
        <button
          className='img-button close'
          type='button'
          onClick={back}
        >
          x
        </button>
        {isDisplayed && (
          <>
            <button
              className='img-button arrow-right'
              type='button'
              onClick={increase}
            >
              {'>'}
            </button>
            <button
              className='img-button arrow-left'
              type='button'
              onClick={decrease}
            >
              {'<'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
