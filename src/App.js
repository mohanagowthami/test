import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from './styledComponents';
import Dashboard from './Pages/Dashboard';
import authService from './services/authService';


function App() {

  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" render={() => authService.isAuthenticatedUser() ? <Dashboard /> : <Redirect to="/" />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
