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
import { Categories, Category } from './Categories';

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
            <li><Link to='/'>Strona domowa</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <Route path='/portfolio' component={Categories} />
            <li><Link to='/cennik'>Cennik</Link></li>
            <li><Link to='/o-mnie'>O mnie</Link></li>
            <li><Link to='/kontakt'>Kontakt</Link></li>
          </ul>

          <Route exact path='/' component={Home} />
          <Route path='/cennik' component={Prices} />
          <Route path='/o-mnie' component={About} />
          <Route path='/kontakt' component={Contact} />

        </nav>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));
