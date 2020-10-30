import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function Image ({ id, name }) {
  const { url } = useRouteMatch();
  const parentUrl = (url.substring(0, url.lastIndexOf('/')));

  return (
    <div>
      <img
        className='modal-img'
        src={`../../../api${parentUrl}/${name}`}
        alt={`${name} ${id}`}
      />
    </div>
  );
}
