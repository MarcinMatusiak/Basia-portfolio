import React /* { useState }  */ from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import About from './About';
import Contact from './Contact/Contact';
import Home from './Home';
import Prices from './Prices';
import PATHS from '../paths';

import '../index.css';
import ModalSwitch from './Gallery/ModalSwitch';

function App () {
  /* API call boilerplate

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
  */

  return (
    <Router>
      <Navigation />
      <Route exact path={PATHS.HOME} component={Home} />
      <Route path={PATHS.PRICES} component={Prices} />
      <Route path={PATHS.ABOUT} component={About} />
      <Route path={PATHS.CONTACT} component={Contact} />
      <Route path={PATHS.GALLERY} component={ModalSwitch} />
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));
