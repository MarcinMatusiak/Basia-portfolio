import categories from '../data/categories';
import React from 'react';

const getResource = (category, resource) => {
  // TODO: call do serwera
  return categories
    .find(({ id }) => id === category)
    .resources
    .find(({ id }) => id === resource);
};
export default function Resource ({ match: { params: { categoryId, resourceId } } }) {
  console.log('dupa');
  const resource = getResource(categoryId, resourceId);

  return (
    <div>
      {resource.name}
      {/* TODO: Zdjęcia */}
    </div>
  );
};
