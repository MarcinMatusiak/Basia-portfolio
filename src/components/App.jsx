import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Resource from './Resource';
import PATHS from '../paths';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Router>
        <Navigation />

        <Route path={PATHS.RESOURCE} component={Resource} />
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));
