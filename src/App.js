import React from 'react';
import { Header } from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Planet } from './pages/planet';

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ '/' } component={ Home } />
          <Route path={ '/planet' } component={ Planet } />
        </Switch>
      </Router>
    </div>
  )
}