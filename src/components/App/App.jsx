import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.module.css';
import routes from '../../helpers/routes';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage';
import ShowsPage from '../../pages/ShowsPage';
import ShowDetailsPage from '../../pages/ShowDetailsPage/ShowDetailsPage';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />

      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.MOVIE_DETAILS_PAGE} component={ShowDetailsPage} />
        <Route path={routes.MOVIES_PAGE} component={ShowsPage} />
        <Redirect to={routes.HOME} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
