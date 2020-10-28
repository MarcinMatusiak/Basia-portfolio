import React, { useEffect, useState } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

export default function Categories () {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(res => setCategories(res));
  }, []);

  return (
    <ul>
      {categories.map(category => <Category {...category} key={category.id} />)}
    </ul>
  );
}

function Category ({ name, id, resources }) {
  const { url } = useRouteMatch();
  return (
    <li className='nav-avg'>
      <Link to={`${url}/${id}`}>{name}</Link>
      <Route path={`/portfolio/${id}`}>
        <ul>
          {resources.map((res) => (
            <li key={res.id} className='nav-sub'>
              <Link to={`${url}/${id}/${res.id}`}>{res.name}</Link>
            </li>
          ))}
        </ul>
      </Route>
    </li>
  );
}
