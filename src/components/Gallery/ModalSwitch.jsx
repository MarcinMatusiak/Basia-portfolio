import React, { useEffect, useState } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';

import Gallery from './Gallery';
import ImageView from './ImageView';
import Modal from './Modal';
import PATHS from '../../paths.js';

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
  }, [resourceId, categoryId]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Switch location={background || location}>
          <Route exact path={PATHS.GALLERY}>
            <Gallery resource={resource} pics={pics} />
          </Route>
          <Route path={`${PATHS.GALLERY}/:name`}>
            <ImageView pics={pics} />
          </Route>
        </Switch>

        {background &&
          <Route path={`${PATHS.GALLERY}/:name`}>
            <Modal pics={pics} />
          </Route>}
      </div>
    );
  }
};
