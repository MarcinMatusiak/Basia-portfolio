import React, { useEffect, useState } from 'react';
import {
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
  Switch,
  Route
} from 'react-router-dom';

import Resource from './Resource';
import PATHS from '../paths.js';

export default function ModalSwitch ({
  match: {
    params: { categoryId, resourceId }
  }
}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [resource, setResource] = useState([]);
  const [pics, setPics] = useState([]);

  const location = useLocation();
  const background = location.state && location.state.background;

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
    return (
      <div>
        <Switch location={background || location}>
          <Route path={PATHS.RESOURCE}>
            <Resource resource={resource} pics={pics} />
          </Route>
          <Route path={`${PATHS.RESOURCE}/:name`} children={<ImageView />} />
        </Switch>

        {background && <Route path={`${PATHS.RESOURCE}/:name`}><Modal pics={pics} /> </Route>}

      </div>
    );
  }
};

function ImageView ({ resource }) {
  const { name } = useParams();
  const image = resource.find(obj => obj.name === name);

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h2>{image.name}</h2>
      <Image id={image.id} name={image.name} />
    </div>
  );
}

function Image ({ id, name }) {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <div>
      <img src={`../../../api${url}`} alt={`${name} ${id}`} />
    </div>
  );
}

function Modal ({ pics }) {
  const history = useHistory();
  const { name } = useParams();
  const image = pics.find(obj => obj.name === name);

  if (!image) return null;

  console.log(name);
  console.log(image);

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '2',
        opacity: 1,
        animation: '$show .5s ease',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}
    >
      <div
        className='modal'
        style={{
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
          position: 'relative',
          padding: '1rem',

          '@media (min-width: 576px)': {
            width: '32rem'
          }
        }}
      >
        <h1>{image.name}</h1>
        <Image id={image.id} name={image.name} />
        <button type='button' onClick={back}>
          Zamknij
        </button>
      </div>
    </div>
  );
}
