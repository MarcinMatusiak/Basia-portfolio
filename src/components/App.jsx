import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Resource from './Resource';
import PATHS from '../paths';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: 'placeholder'
    };
  }

  componentDidMount () {
    fetch('/api')
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.json().message);
        }
        return response.json();
      })
      .then(res => this.setState({ data: res.message }))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <Router>
        <Navigation />

        <Route path={PATHS.RESOURCE} component={Resource} />
        <p>{this.state.data}</p>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));
