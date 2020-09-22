import React from 'react';
import { Route, Link } from 'react-router-dom';

import { categories } from '../json/categories';

export function Resource ({ match }) {
  const category = categories.find(({ id }) => id === match.params.categoryId)
    .resources.find(({ id }) => id === match.params.subId);

  return (
    <div>
      <a href={category.url}>Zobacz zdjęcia</a>
    </div>
  );
}

export function Category ({ match }) {
  const category = categories.find(({ id }) => id === match.params.categoryId);

  return (
    <div>
      <ul>
        {category.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  );
}

export function Categories ({ match }) {
  return (
    <div>
      <ul>
        {categories.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
}
