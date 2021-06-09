import React from "react";
import Search from './pages/Search'
// import Navbar from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from './pages/Saved'
import Header from './components/Header'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/saved' component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;