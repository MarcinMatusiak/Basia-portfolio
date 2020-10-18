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
    this.callBackendAPI()
      .then(res => this.setState({ data: res.message }))
      .catch(err => console.log(err));
  }

  async callBackendAPI () {
    const response = await fetch('/api');
    console.log(response);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

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
