import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Login from './container/login'
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <switch>
        <Route exact path='/' component = { Login } />
      </switch>
    </Router>
      
    </div>
  );
}

export default App;
