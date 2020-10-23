import React, { useEffect, useState } from 'react';
import zdj from '../img/marysia-helenka/DSC_0061.jpg';

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
      .then(res => res.find(({ id }) => id === categoryId)
        .resources
        .find(({ id }) => id === resourceId)
      )
      .then(
        (result) => {
          setResource(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, [resourceId]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        {resource.name}
        {console.log(resource.pics)}
        {resource.pics}
        <img src={zdj} alt={`picture ${resource.name}`} className='picture' />
        {/*
            {resource.imgs.map(( pic) => <img src={pic.url} alt={pic.id} className='picture' />)}

        */}
      </div>
    );
  }
};
