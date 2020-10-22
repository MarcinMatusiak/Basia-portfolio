import React, { useEffect, useState } from 'react';

export default function Resource ({
  match: {
    params: { categoryId, resourceId }
  }
}) {
  const [error, setError] = useState(null);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(res => res.find(({ id }) => id === categoryId))
      .then(res => res.resources)
      .then(res => res.find(({ id }) => id === resourceId))
      .then(
        (result) => {
          setResource(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        {resource.name}
        {/* resource.imgs */}
      </div>
    );
  }
};
