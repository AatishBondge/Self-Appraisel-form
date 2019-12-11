import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from './container/login'
import DashBoard from './container/dashboard';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component = { Login } />
          <Route path='/dashboard' component = { DashBoard}  />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
