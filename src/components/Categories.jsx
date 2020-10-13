import React from 'react';
import { Route, Link } from 'react-router-dom';

import { categories } from '../json/categories';

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

      <Route path={`${match.path}/:categoryId`}>
        {({ match }) => {
          if (!match) {
            return null;
          }

          return <Category match={match} categories={categories} />;
        }}
      </Route>
    </div>
  );
}

function Category ({ match }) {
  const category = categories.find(({ id }) => id === match.params.categoryId);

  return (
    <div>
      <ul>
        {category.resources.map((subcat) => (
          <li key={subcat.id}>
            <Link to={`${match.url}/${subcat.id}`}>{subcat.name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:subcatId`} component={Resource} />
    </div>
  );
}

function Resource ({ match }) {
  return <h2>Zdjęcia</h2>;
}
