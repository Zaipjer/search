import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/search" component={SearchPage}/>
          <Route exact path="" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
