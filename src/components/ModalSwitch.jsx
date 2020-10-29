import React, { useEffect, useState } from 'react';
import {
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
  Switch,
  Route
} from 'react-router-dom';

import Gallery from './Gallery';
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
          <Route path={PATHS.GALLERY}>
            <Gallery resource={resource} pics={pics} />
          </Route>
          <Route path={`${PATHS.GALLERY}/:name`} children={<ImageView />} />
        </Switch>

        {background && <Route path={`${PATHS.GALLERY}/:name`}><Modal pics={pics} /> </Route>}

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
      <img
        className='modal-img'
        src={`../../../api${url}`}
        alt={`${name} ${id}`}
      />
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

  const escape = e => {
    if (e.keyCode === 27) history.goBack();
  };

  useEffect(() => {
    document.addEventListener('keydown', escape, false);

    return () => {
      document.removeEventListener('keydown', escape, false);
    };
  }, []);

  return (
    <div
      className='modal-container'
      onClick={back}
      onKeyDown={escape}

    >
      <div className='modal'>
        <Image id={image.id} name={image.name} />
        <button
          className='close'
          type='button'
          onClick={back}
        >
          x
        </button>
      </div>
    </div>
  );
}
