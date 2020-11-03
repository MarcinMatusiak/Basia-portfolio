import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global.js';
import { theme } from './theme';

import About from './components/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home';
import Prices from './components/Prices';
import PATHS from './paths';

import './index.css';
import ModalSwitch from './components/Gallery/ModalSwitch';
import DisplayNavigation from './components/Navigation/DisplayNavigation.jsx';

export default function App () {
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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <DisplayNavigation />
          <Route exact path={PATHS.HOME} component={Home} />
          <Route path={PATHS.PRICES} component={Prices} />
          <Route path={PATHS.ABOUT} component={About} />
          <Route path={PATHS.CONTACT} component={Contact} />
          <Route path={PATHS.GALLERY} component={ModalSwitch} />
        </>
      </ThemeProvider>
    </Router>
  );
};
