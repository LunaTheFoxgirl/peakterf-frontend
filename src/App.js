import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './catalog/catalog';
import CatalogPage from './catalog/catalog';
import SubmitPage from './submit/submit';
import AboutPage from './about/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/submit">
          <SubmitPage />
        </Route>
        <Route path="/">
          <CatalogPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
