import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Resource from './Resource';
import PATHS from '../paths';

import '../index.css';

function App () {
  const [state, setState] = useState({
    data: 'placeholder'
  });

  useEffect(() => {
    fetch('/api')
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.json().message);
        }
        return response.json();
      })
      .then(res => setState({ data: res.message }))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <Navigation />

      <Route path={PATHS.RESOURCE} component={Resource} />
      <p>{state.data}</p>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));
