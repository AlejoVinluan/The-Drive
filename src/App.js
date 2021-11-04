import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PlayerSearch from './components/PlayerSearch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stats' component={PlayerSearch} />
          { /*
          <Route path='/matchups' component={Matchups} />
          */ }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
