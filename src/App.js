import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from './container/login'
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' component = { Login } />
        <Route path='/dashboard'>DashBoard</Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
