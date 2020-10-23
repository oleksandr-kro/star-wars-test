import React from 'react';
import { Header } from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ '/' } component={ Home } />
        </Switch>
      </Router>
    </div>
  )
}