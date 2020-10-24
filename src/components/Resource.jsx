import React, { useEffect, useState } from 'react';

export default function Resource ({
  match: {
    params: { categoryId, resourceId }
  }
}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [resource, setResource] = useState([]);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(res => res.find(({ id }) => id === categoryId)
        .resources
        .find(({ id }) => id === resourceId)
      )
      .then(
        (result) => {
          setIsLoaded(true);
          setPics(result.pics);
          setResource(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [resourceId]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (resource && pics && <Pictures resource={resource} pics={pics} />);
  }
};

function Pictures ({ resource, pics }) {
  return (
    <div>
      <p>{resource.name}</p>
      {pics.map((pic, i) => <img src={require(`${pic}`)} key={i} />)}
    </div>
  );
}
