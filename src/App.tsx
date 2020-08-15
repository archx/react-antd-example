import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import { Home, Login } from './views'

const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <Router>
        <Route path="/" >
          <Redirect to="/login" />
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  )
}

export default App;
