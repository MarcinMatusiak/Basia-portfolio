import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Prices from './Prices';
import Categories from './Categories';
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
        <nav>
          <ul>
            <li><Link to={PATHS.HOME}>Strona domowa</Link></li>
            <li><Link to={PATHS.PORTFOLIO}>Portfolio</Link></li>
            <Route path={PATHS.PORTFOLIO} component={Categories} />
            <li><Link to={PATHS.PRICES}>Cennik</Link></li>
            <li><Link to={PATHS.ABOUT}>O mnie</Link></li>
            <li><Link to={PATHS.CONTACT}>Kontakt</Link></li>
          </ul>

          <Route exact path={PATHS.HOME} component={Home} />
          <Route path={PATHS.PRICES} component={Prices} />
          <Route path={PATHS.ABOUT} component={About} />
          <Route path={PATHS.CONTACT} component={Contact} />
        </nav>

        <Route path={PATHS.RESOURCE}>
          <Resource />
        </Route>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));
