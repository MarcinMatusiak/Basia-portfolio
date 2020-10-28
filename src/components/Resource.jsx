import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

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
    fetch('/api/portfolio')
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
    <section className='content'>
      <h2>{resource.name}</h2>
      <div className='gallery'>
        {pics.map(pic => <Picture {...pic} resource={resource} key={pic.id} />)}
      </div>
    </section>
  );
};

function Picture ({ id, name, resource }) {
  const { url } = useRouteMatch();

  return (
    <div className='gallery-item'>
      <Link to={`${url}/${name}`}>
        <img src={`../../api${url}/${name}`} alt={`${resource.name} ${id}`} />
      </Link>
    </div>
  );
}

/*
function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.name}</h1>
      <Image color={image.color} />
    </div>
  );
}

function Image({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    />
  );
}

*/
