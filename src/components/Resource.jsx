import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

export default function Resource ({ resource, pics }) {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <section className='content'>
      <h2>{resource.name}</h2>
      <div className='gallery'>
        {pics.map(pic => (
          <div className='gallery-item' key={pic.id}>
            <Link
              key={pic.id}
              to={{
                pathname: `${url}/${pic.name}`,
                state: { background: location }
              }}
            >
              <img src={`../../api${url}/${pic.name}`} alt={`${resource.name} ${pic.id}`} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
